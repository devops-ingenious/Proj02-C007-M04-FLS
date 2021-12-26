import { useState, useEffect } from 'react';
import Navbar from '../../componentes/Navbar/Navbar';
import Frame from '../../componentes/Frame/Frame';
import Footer from '../../componentes/Footer/Footer';
import axios from 'axios';
import './Home.scss';
import Card from '../../componentes/Card/Card'

export default function Home() {

    const [filmes, setFilmes] = useState([]);
    const [construido, setConstruido] = useState(false);

    const getFilmes = async () => {
        await axios.get('/movie/findMany')
        .then(response => {
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
        <div className='home'>
            <Navbar />
            <Frame
                image="https://www.dci.com.br/wp-content/uploads/2020/11/Confira-os-lancamentos-no-cinema-desta-semana-26.11.png"
                imageAlt="Imagens de Filmes"
                text=""
            />
            <div className='home_cards'>
                {
                    filmes.map(item => (
                        <Card
                            id={item.id}
                            image={item.cover}
                            name={item.title}
                            key={item.id}
                            onWatchClick={assistirFilme}
                        />
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}
