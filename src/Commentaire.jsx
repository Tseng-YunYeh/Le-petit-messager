import './Commentaire.css'
import { useState } from 'react'

function Commentaire({ commentaire, supprimerCommentaire }) {
    const [estEnSuppression, setEstEnSuppression] = useState(false)

    // Formater la date en francais 
    const date = new Date(commentaire.date)
    const dateFormatee = date.toLocaleDateString('fr-CA', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    // Gérer la suppression du commentaire
    function gererSuppression() {
        if (estEnSuppression) {
            return
        }
        setEstEnSuppression(true)
    }
    // Gérer la fin de l'animation de suppression
    function gererFinAnimation() {
        if (estEnSuppression) {
            supprimerCommentaire(commentaire.id)
        }
    }

    return (
        <article
            className={"Commentaire" + (estEnSuppression ? ' Commentaire--suppression' : '')}
            onAnimationEnd={gererFinAnimation}
        >
            <div className="Commentaire-entete">
                <strong className="Commentaire-nom">🕯️ {commentaire.nom}</strong>
                <time className="Commentaire-date">{dateFormatee}</time>
            </div>
            <p className="Commentaire-texte">
                {commentaire.texte}
            </p>
            <button
                className="Commentaire-supprimer"
                onClick={gererSuppression}
                disabled={estEnSuppression}
            >
                🗑️ Supprimer
            </button>
        </article>
    )
}
export default Commentaire