import './FormulaireCommentaire.css'
import { useState } from 'react'

function FormulaireCommentaire({ ajouterCommentaire }) {
    const [nom, setNom] = useState('')
    const [texte, setTexte] = useState('')
    const [erreur, setErreur] = useState('')

    function gererSoumission(e) {
        e.preventDefault()

        // Verifier que les champs sont remplis
        if (nom.trim() === '' && texte.trim() === '') {
            setErreur('Veuillez remplir votre nom et votre message.')
            return
        }
        if (nom.trim() === '') {
            setErreur('Veuillez remplir votre nom.')
            return
        }
        if (texte.trim() === '') {
            setErreur('Veuillez écrire un message.')
            return
        }

        // Pas d'erreur
        setErreur('')

        // Creer le commentaire
        const nouveauCommentaire = {
            id: Date.now(),
            nom: nom.trim(),
            texte: texte.trim(),
            date: new Date().toISOString()
        }

        ajouterCommentaire(nouveauCommentaire)

        // Vider les champs
        setNom('')
        setTexte('')
    }

    return (
        <form className="FormulaireCommentaire" onSubmit={gererSoumission}>
            <h3 className="FormulaireCommentaire-titre">✍️ Laisser un témoignage</h3>

            <div className="FormulaireCommentaire-champ">
                <label htmlFor="nom">Votre nom</label>
                <input
                    type="text"
                    id="nom"
                    placeholder="Ex: Martin St-Pierre"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />
            </div>

            <div className="FormulaireCommentaire-champ">
                <label htmlFor="texte">Votre message</label>
                <textarea
                    id="texte"
                    rows="4"
                    placeholder="Racontez votre expérience avec Le Petit Messager..."
                    value={texte}
                    onChange={(e) => setTexte(e.target.value)}
                ></textarea>
            </div>

            {erreur && <p className="FormulaireCommentaire-erreur">{erreur}</p>}

            <button type="submit" className="FormulaireCommentaire-bouton">
                📜 Envoyer
            </button>
        </form>
    )
}
export default FormulaireCommentaire