import './Entete.css'
import logo from '/imgs/logo.png'

function Entete() {

    return (
        <header className="Entete">
            <div className="Entete-gauche">
                <img className="Entete-logo" src={logo} alt="Logo Le Petit Messager" />
                <div className="Entete-titres">
                    <h1 className="Entete-titre">Le Petit Messager</h1>
                    <p className="Entete-soustitre">La nuit, le monde ne semble plus du tout le même.</p>
                </div>
            </div>
            <nav className="Entete-nav">
                <a href="#presentation">Le Jeu</a>
                <a href="#galerie">Galerie</a>
                <a href="#equipe">Équipe</a>
                <a href="#aime">J'aime</a>
                <a href="#commentaires">Commentaires</a>
            </nav>
        </header>
    )
}
export default Entete