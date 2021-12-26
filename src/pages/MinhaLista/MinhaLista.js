import { useState, useEffect } from 'react';
import Navbar from '../../componentes/Navbar/Navbar';
import Footer from '../../componentes/Footer/Footer';
import axios from 'axios';
import './MinhaLista.scss';
import Card from '../../componentes/Card/Card'

export default function MinhaLista() {

    const [filmes, setFilmes] = useState([]);
    const [construido, setConstruido] = useState(false);

    const getFilmes = async () => {
        await axios.get('/user/seeList', { 
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } 
        }).then(response => {
            if(construido) {
                setFilmes(response.data);
            }
        })
    }

    useEffect(() => {
        setConstruido(true)
        getFilmes()
    }, [construido])

    const assistirFilme = async (movieId) => {
        await axios.patch(`/user/addList/${movieId}`, {}, { 
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } 
        }).then(response => {
            alert('Filme adicionado na sua lista.');
        })
    }

    return(
        <div className='lista'>
            <Navbar />
            <div className='lista-cards'>
                {
                    filmes.map(item => (
                        <Card
                            id={item.id}
                            image={item.cover}
                            name={item.title}
                            key={item.id}
                            onWatchClick={assistirFilme}
                            exibeAssistir={false}
                        />
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}
