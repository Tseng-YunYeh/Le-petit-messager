import './Equipe.css'

function Equipe() {

    return (
        <section className="Equipe" id="equipe">
            <h2 className="Equipe-titre">👥 L'équipe derrière le projet</h2>
            <p className="Equipe-description">Les créateurs du Petit Messager</p>

            <div className="Equipe-membres">
                <div className="Equipe-membre">
                    <div className="Equipe-avatar">O</div>
                    <h3 className="Equipe-nom">Olivier</h3>
                    <p className="Equipe-role">Chargé de projet</p>
                    <p className="Equipe-detail">Mécaniques de jeu et interactions</p>
                </div>
                <div className="Equipe-membre">
                    <div className="Equipe-avatar">B</div>
                    <h3 className="Equipe-nom">Batoul</h3>
                    <p className="Equipe-role">Directrice artistique</p>
                    <p className="Equipe-detail">Interface et expérience utilisateur</p>
                </div>
                <div className="Equipe-membre">
                    <div className="Equipe-avatar">X</div>
                    <h3 className="Equipe-nom">Xavier</h3>
                    <p className="Equipe-role">Directeur technique</p>
                    <p className="Equipe-detail">Modélisation des décors et personnages</p>
                </div>
                <div className="Equipe-membre">
                    <div className="Equipe-avatar">Y</div>
                    <h3 className="Equipe-nom">Yun Yeh</h3>
                    <p className="Equipe-role">Directeur à l’intégration</p>
                    <p className="Equipe-detail">Conception des niveaux et narration</p>
                </div>
            </div>
        </section>
    )
}
export default Equipe