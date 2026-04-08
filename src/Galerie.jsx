import './Galerie.css'
import photo1 from '/imgs/photo1.png'
import photo2 from '/imgs/photo2.png'
import photo3 from '/imgs/photo3.png'
import photo4 from '/imgs/photo4.png'

function Galerie() {

    return (
        <section className="Galerie" id="galerie">
            <h2 className="Galerie-titre">📷 Galerie</h2>
            <p className="Galerie-description">Explorez les décors sombres et les ruelles de la ville en crise</p>

            <div className="Galerie-grille">
                <div className="Galerie-item">
                    <img className="Galerie-image" src={photo1} alt="" />
                    <p className="Galerie-legende">Environnement</p>
                </div>
                <div className="Galerie-item">
                    <img className="Galerie-image" src={photo2} alt="" />
                    <p className="Galerie-legende">personnage</p>
                </div>
                <div className="Galerie-item">
                    <img className="Galerie-image" src={photo3} alt="" />
                    <p className="Galerie-legende">ciel</p>
                </div>
                <div className="Galerie-item">
                    <img className="Galerie-image" src={photo4} alt="" />
                    <p className="Galerie-legende">menu</p>
                </div>
            </div>
        </section>
    )
}
export default Galerie