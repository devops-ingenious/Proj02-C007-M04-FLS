import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Navbar from '../../componentes/Navbar/Navbar';
import Footer from '../../componentes/Footer/Footer';
import './Cadastro.scss';

export default function Cadastro() {

    const navigate = useNavigate();
    const vaParaLogin = () => {
        navigate('/login', {})
    }

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [imagem, setImagem] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        if (senha !== senhaConfirmacao) {
            alert('A senha e a confirmação não coincidem! Informe a mesma senha nos dois campos.');
            return;
        }

        const data = {
            name: nome,
            email,
            birthdate: dataNascimento,
            imageUrl: imagem,
            password: senha,
            passwordConfirmation: senhaConfirmacao
        }

        axios.post('/user/create', data)
        .then(response => {
            alert('Conta criada com sucesso!');
            vaParaLogin();
        })
    }

    return (
        <div className='cadastro'>
            <Navbar />
            <div className="cadastro-container">
                <div className="cadastro-container-form">
                    <form className='cadastro-form' onSubmit={handleSubmit} >
                        <h2 className='cadastro-title'>Cadastro de Usuário</h2>
                        <label>
                            Nome
                            <input className='cadastro-nome'
                                type="text"
                                required
                                onChange={event => setNome(event.target.value)}
                                />
                            </label>
                        <label>
                            e-mail
                            <input className='cadastro-email'
                                type="email"
                                required
                                onChange={event => setEmail(event.target.value)}
                            />
                            </label>
                        <label>
                            Data de aniversário
                            <input className='cadastro-data'
                                type="data"
                                required
                                onChange={event => setDataNascimento(event.target.value)}
                            />
                        </label>
                        <label>
                            URL da Imagem
                            <input className='cadastro-urlImagem'
                                type="text"
                                required
                                onChange={event => setImagem(event.target.value)}
                            />
                        </label>
                        <label>
                            Senha
                            <input className='cadastro-senha'
                                type="password"
                                required
                                onChange={event => setSenha(event.target.value)}
                                />
                            </label>
                            <label>
                            Confirmação da senha
                            <input className='cadastro-senha-confirmacao'
                                type="password"
                                required
                                onChange={event => setSenhaConfirmacao(event.target.value)}
                                />
                            </label>

                        <input className='cadastro-botao' type="submit" value="Salvar" />
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}
