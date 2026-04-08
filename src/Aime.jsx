import './Aime.css'
import { useState, useEffect } from 'react'

function Aime() {
    // Lire les likes sauvegardés (1 par defaut la premiere fois)
    let likesDepart = 1
    let aimeDepart = false
    const sauvegardeLikes = localStorage.getItem('likes')
    if (sauvegardeLikes !== null) {
        likesDepart = Number(sauvegardeLikes)
    }
    if (localStorage.getItem('aDejaAime') === 'oui') {
        aimeDepart = true
    }

    const [likes, setLikes] = useState(likesDepart)
    const [aime, setAime] = useState(aimeDepart)

    // Sauvegarder dans localStorage a chaque changement
    useEffect(() => {
        localStorage.setItem('likes', likes)
        if (aime) {
            localStorage.setItem('aDejaAime', 'oui')
        } else {
            localStorage.setItem('aDejaAime', 'non')
        }
    }, [likes, aime])

    function gererClic() {
        if (aime) {
            setLikes(likes - 1)
            setAime(false)
        } else {
            setLikes(likes + 1)
            setAime(true)
        }
    }

    return (
        <section className="Aime" id="aime">
            <h2 className="Aime-titre">💛 Soutenez Le Petit Messager</h2>
            <p className="Aime-description">Aidez ce garçon courageux à faire connaître son histoire</p>
            <div className="Aime-contenu">
                <button
                    className={"Aime-bouton" + (aime ? " Aime-bouton--actif" : "")}
                    onClick={gererClic}
                >
                    {aime ? '💖' : '❤️'} {aime ? "J'aime!" : "J'aime"}
                </button>
                <p className="Aime-compte">
                    <span className="Aime-nombre">{likes}</span> cœur(s)
                </p>
            </div>
        </section>
    )
}
export default Aime