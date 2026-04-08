import './PresentationJeu.css'
import logo from '/imgs/logo.png'

function PresentationJeu() {

    return (
        <section className="PresentationJeu" id="presentation">
            <div className="PresentationJeu-hero">
                <img className="PresentationJeu-logo" src={logo} alt="Le Petit Messager" />
                <h2 className="PresentationJeu-titre">Le Petit Messager</h2>
                <p className="PresentationJeu-soustitre">La nuit, le monde ne semble plus du tout le même.</p>
            </div>

            <div className="PresentationJeu-contenu">
                <div className="PresentationJeu-info">
                    <p className="PresentationJeu-type">🎮 Jeu d'aventure narratif 3D — Unity</p>

                    <div className="PresentationJeu-synopsis">
                        <h3 className="PresentationJeu-synopsis-titre">📖 Synopsis</h3>

                        <div className="PresentationJeu-chapitres">
                            <div className="PresentationJeu-chapitre">
                                <h4>Chapitre I — La mission</h4>
                                <p>
                                    Dans une grande ville frappée par la crise, une couturière et son fils
                                    vivaient modestement. L'école étant fermée, l'enfant restait auprès de
                                    sa mère. Un jour, elle lui confia un bout de papier à remettre à un homme
                                    vêtu de blanc. Sans savoir lire ni bien s'orienter, le garçon partit
                                    malgré sa peur.
                                </p>
                            </div>

                            <div className="PresentationJeu-chapitre">
                                <h4>Chapitre II — Le chemin</h4>
                                <p>
                                    En chemin, un ancien professeur étrange lui proposa de lui indiquer où
                                    trouver l'homme en blanc, à condition de passer la nuit chez eux. L'enfant
                                    refusa et réussit à lui échapper. Il finit par trouver un bâtiment vert
                                    où se tenait le vieil homme en blanc.
                                </p>
                            </div>

                            <div className="PresentationJeu-chapitre">
                                <h4>Chapitre III — La vérité</h4>
                                <p>
                                    En lui donnant le papier, il comprit que c'était une ordonnance — sa mère
                                    était en fait gravement malade. Pris de panique, il courut chez lui, mais
                                    le bruit d'une ambulance l'accueillit. Il arriva trop tard, signalant
                                    son futur d'orphelin.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="PresentationJeu-tags">
                        <span className="tag">3D</span>
                        <span className="tag">Aventure</span>
                        <span className="tag">Narratif</span>
                        <span className="tag">Solo</span>
                        <span className="tag">Exploration</span>
                        <span className="tag">Sombre</span>
                        <span className="tag">Pauvre</span>
                        <span className="tag">Unity</span>
                    </div>

                    <a className="PresentationJeu-lien" href="" target="_blank" rel="noopener noreferrer">
                        ▶ Jouer dans le navigateur
                    </a>
                </div>
            </div>
        </section>
    )
}
export default PresentationJeu