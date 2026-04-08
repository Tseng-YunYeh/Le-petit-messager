import './Appli.css'
import Entete from './Entete'
import PresentationJeu from './PresentationJeu'
import Galerie from './Galerie'
import Equipe from './Equipe'
import Aime from './Aime'
import Commentaires from './Commentaires'
import Pied2Page from './Pied2page'

function Appli() {

  return (
    <div className="Appli">
      <Entete />
      <main className="Appli-contenu">
        <PresentationJeu />
        <Galerie />
        <Equipe />
        <Aime />
        <Commentaires />
      </main>
      <Pied2Page />
    </div>
  )
}

export default Appli
