import './Commentaires.css'
import { useState, useEffect } from 'react'
import Commentaire from './Commentaire'
import FormulaireCommentaire from './FormulaireCommentaire'

// 2 commentaires par defaut (affichés la premiere fois)
const commentairesParDefaut = [
    {
        id: 1,
        nom: 'Alex Tremblay',
        texte: 'Super jeu! J\'adore l\'ambiance sombre et le mystère.',
        date: '2026-02-15'
    },
    {
        id: 2,
        nom: 'Marie Lavoie',
        texte: 'Le petit messager est tellement attachant. Hâte de voir la suite!',
        date: '2026-03-01'
    }
]

function Commentaires() {
    // Lire les commentaires sauvegardés, sinon utiliser les 2 par defaut
    let commentairesDepart = commentairesParDefaut
    const sauvegarde = localStorage.getItem('commentaires')
    if (sauvegarde !== null) {
        commentairesDepart = JSON.parse(sauvegarde)
    }

    const [commentaires, setCommentaires] = useState(commentairesDepart)
    const [tri, setTri] = useState('date')

    // Sauvegarder dans localStorage a chaque changement
    useEffect(() => {
        localStorage.setItem('commentaires', JSON.stringify(commentaires))
    }, [commentaires])

    // Ajouter un commentaire
    function ajouterCommentaire(nouveauCommentaire) {
        setCommentaires([...commentaires, nouveauCommentaire])
    }

    // Supprimer un commentaire
    function supprimerCommentaire(id) {
        setCommentaires(commentaires.filter(c => c.id !== id))
    }

    // Compter le nombre de commentaires
    const nbCommentaires = commentaires.length

    // Trier les commentaires par date (plus recent en premier)
    const commentairesParDate = [...commentaires].sort(
        function(a, b) {
            return new Date(b.date) - new Date(a.date)
        }
    )

    // Trier les commentaires par nom (ordre alphabetique)
    const commentairesParNom = [...commentaires].sort(
        (a, b) => a.nom.localeCompare(b.nom)
    )

    // Choisir le bon tri selon le bouton cliqué
    const commentairesTriees = tri === 'date' ? commentairesParDate : commentairesParNom

    return (
        <section className="Commentaires" id="commentaires">
            <h2 className="Commentaires-titre">💬 Témoignages des joueurs</h2>
            <p className="Commentaires-description">Partagez votre expérience avec Le Petit Messager</p>
            <p className="Commentaires-compte">{nbCommentaires} commentaire{nbCommentaires > 1 ? 's' : ''}</p>

            <FormulaireCommentaire ajouterCommentaire={ajouterCommentaire} />

            <div className="Commentaires-tri">
                <span className="Commentaires-tri-label">Trier par :</span>
                <button
                    className={"Commentaires-tri-bouton" + (tri === 'date' ? ' Commentaires-tri-bouton--actif' : '')}
                    onClick={() => setTri('date')}
                >
                    📅 Date
                </button>
                <button
                    className={"Commentaires-tri-bouton" + (tri === 'nom' ? ' Commentaires-tri-bouton--actif' : '')}
                    onClick={() => setTri('nom')}
                >
                    🔤 Nom
                </button>
            </div>

            <div className="Commentaires-liste">
                {commentairesTriees.map(c =>
                    <Commentaire
                        key={c.id}
                        commentaire={c}
                        supprimerCommentaire={supprimerCommentaire}
                    />
                )}
                {commentaires.length === 0 && (
                    <p className="Commentaires-vide">Aucun commentaire pour le moment. Soyez le premier!</p>
                )}
            </div>
        </section>
    )
}
export default Commentaires