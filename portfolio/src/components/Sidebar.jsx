import Avatar from '../img/photo1704390526.jpeg'
import "../styles/components/sidebar.sass"
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Pedro Costa" />
    <p className="tittle">Desenvolvedor</p>
    <SocialNetworks />
    <p>informações de contato</p>
    <a href="" className="btn">
      Download Currículo
    </a>
  </aside>
}

export default Sidebar
