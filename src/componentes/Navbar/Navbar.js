import { Link } from 'react-router-dom';
import './Navbar.scss';
import { isAuthenticated } from '../../services/auth';

export default function Navbar() {
    const logado = isAuthenticated();

    return(
        <div className='navbar'>
            {/* <h1 className='navbar_logo'>Nome da logo</h1> */}

            <Link to="/" className='navbar_links_items'>
                <img className='navbar_logo' src="/logo_navbar.png" />
            </Link>

            <ul className='navbar_links'>
                <Link to="/" className='navbar_links_items'><li>Home</li></Link>
                {logado ? (
                    <>
                        <Link to="/minha-lista" className='navbar_links_items'><li>Minha Lista</li></Link>
                        <Link to="/perfil" className='navbar_links_items'><li>Perfil</li></Link>
                        <Link to="/logout" className='navbar_links_items'><li>Logout</li></Link>
                    </>
                ) : (
                    <>
                        <Link to="/cadastro" className='navbar_links_items'><li>Cadastrar Usuário</li></Link>
                        <Link to="/login" className='navbar_links_items'><li>Login</li></Link>
                    </>
                )}
            </ul>
        </div>
    )
}
