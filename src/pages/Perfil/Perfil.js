import React, { useState, useEffect } from 'react';
import Navbar from '../../componentes/Navbar/Navbar';
import Footer from '../../componentes/Footer/Footer';
import axios from 'axios';
import './Perfil.scss';

export default function Perfil() {

    const [perfil, setPerfil] = useState(null);
    const [construido, setConstruido] = useState(false);

    const getPerfil = async () => {
        await axios.get('/auth/profile', { 
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } 
        }).then(response => {
            if(construido) {
                setPerfil(response.data);
            }
        })
    }

    useEffect(() => {
        setConstruido(true)
        getPerfil()
    }, [construido])

    return (
        <div className='perfil'>
            <Navbar />
            {perfil && (
                <div className="perfil-container">
                    <div className="perfil-titulo">
                        <p>Perfil do Usuário</p>
                    </div>
                    <div className="perfil-dados">
                        <p className="perfil-topico">Nome</p>
                        <p className="perfil-descricao">{perfil.name}</p>
                        <br/>
                        <p className="perfil-topico">e-mail</p>
                        <p className="perfil-descricao">{perfil.email}</p>
                        <br/>
                        <p className="perfil-topico">Data de Nascimento</p>
                        <p className="perfil-descricao">{perfil.birthdate}</p>
                    </div>
                    <div className="linha"></div>
                    <div>
                        <img className="perfil-imagem" src={perfil.imageUrl}/>
                    </div>

                </div>
            )}
            <Footer />
        </div>
    )
}
