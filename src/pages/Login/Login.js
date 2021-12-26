import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Navbar from '../../componentes/Navbar/Navbar';
import Footer from '../../componentes/Footer/Footer';
import './Login.scss';

export default function Login() {

    const navigate = useNavigate();
    const vaParaHome = () => {
        navigate('/', {})
    }

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const login = {
            email: email,
            password: senha
        }

        axios.post('/auth/login', login)
        .then(response => {
            const token = response.data.token;
            localStorage.setItem('token', token);
            vaParaHome();
        })
    }

    return (
        <div className='login'>
            <Navbar />
                <div className="login-container">
                    <div className="login-container-form">
                        <form className='login-form' onSubmit={handleSubmit} >
                            <h2 className='login-title'>Faça o Login</h2>
                            <input className='login-input-email'
                                type="email"
                                placeholder="e-mail..."
                                required
                                onChange={event => setEmail(event.target.value)}
                                />
                            <input className='login-input-nome'
                                type="password"
                                placeholder="Senha..."
                                required
                                onChange={event => setSenha(event.target.value)}
                            />
                            <input className='login-botao' type="submit" value="Logar" />
                        </form>
                    </div>
                </div>
            <Footer />
        </div>
    )
}
