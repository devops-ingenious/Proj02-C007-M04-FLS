import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../componentes/Navbar/Navbar';
import Footer from '../../componentes/Footer/Footer';
import './Filme.scss';

export default function Filme() {

    const { id } = useParams();
 
    const [filme, setFilme] = useState({});

    const getFilme = async (id) => {
        await axios.get(`/movie/findUnique/${id}`, { 
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } 
        }).then(response => {
            setFilme(response.data);
        })
    }

    useEffect(() => {
        getFilme(id);
    }, [id]);

    return (
        <div className='filme'>
            <Navbar />

            <div className="filme-container">
                <p className="filme-titulo-pagina" >Detalhes do Filme</p>
                <br/>
                <p className="filme-topico" >Título</p>
                <p className="filme-descricao" >{filme.title}</p>
                <br/>
                <p className="filme-topico">Genero</p>
                <p className="filme-descricao">{filme.genres}</p>
                <br/>
                <p className="filme-topico">Ano de Produção</p>
                <p className="filme-descricao">{filme.year}</p>
                <br/>
                <p className="filme-topico">Elenco</p>
                <p className="filme-descricao">{filme.cast}</p>
                <br/>
                <p className="filme-topico">Resumo</p>
                <p className="filme-descricao">{filme.resume}</p>
                <br/>
                <div className="linha"></div>
                <img className="filme-imagem" src={filme.cover} alt={filme.title} />
            </div>

            <Footer />
        </div>
    )
}
