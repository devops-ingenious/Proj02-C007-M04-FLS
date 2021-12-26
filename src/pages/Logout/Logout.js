import { useNavigate } from 'react-router-dom';
import React from 'react';
import Navbar from '../../componentes/Navbar/Navbar';
import Footer from '../../componentes/Footer/Footer';
import './Logout.scss';
import { logout } from '../../services/auth'

export default function Logout() {

    const navigate = useNavigate();
    const vaParaHome = () => {
        navigate('/', {})
    }

    const handleLogout = () => {
        logout();
        vaParaHome();
    };

    return (
        <div className='logout'>
            <Navbar />
            <div className="logout-container">
                <div className="logout-mensagem">
                    <>
                        <div>
                            <p>Tem Certeza de que deseja sair?</p>
                        </div>
                        <div>
                            <button className="logout-botao" type="button" onClick={handleLogout}>
                                Sim
                            </button>
                        </div>
                    </>
                </div>
            </div>
            <Footer />
        </div>
    )
}
