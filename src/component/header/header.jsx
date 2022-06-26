import './header.css';
import { Link } from "react-router-dom";
export default function Header() {
    return (
       <div>
            <div className='bg-nav d-flex justify-content-between align-items-center px-3'>
            <div className='logo'>
               <Link  to="/"><img src="/img/logo.png" alt="logo" /></Link> 
            </div>
            <div className='text-secondary'>                
                <Link to="/form">Accueil</Link>
            </div>
            <div className='text-secondary'>
                <Link to="/line"> Profil </Link> 
            </div>
            <div className='text-secondary'>
                Réglage
            </div>
            <div className='text-secondary'>
                Communauté
            </div>
        </div>
       </div>
    )
}