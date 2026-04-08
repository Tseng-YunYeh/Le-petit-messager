import './Pied2Page.css'
import logo from '/imgs/logo.png'

function Pied2Page() {

    return (
        <footer className="Pied2Page">
            <p className="Pied2Page-titre"><img src={logo} alt="" /> Le Petit Messager</p>
            <p className="Pied2Page-equipe">Créé par Yun Yeh Tseng</p>
            <p className="Pied2Page-cours">
                Projet réalisé dans le cadre du cours Création de jeu en équipe
            </p>
            <p className="Pied2Page-copy">&copy; {new Date().getFullYear()} — Tous droits réservés</p>
        </footer>
    )
}
export default Pied2Page