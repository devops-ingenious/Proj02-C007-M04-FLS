import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Filme from './pages/Filme/Filme';
import Logout from './pages/Logout/Logout';
import Cadastro from './pages/Cadastro/Cadastro';
import MinhaLista from './pages/MinhaLista/MinhaLista';
import Perfil from './pages/Perfil/Perfil';

axios.defaults.baseURL = 'https://streaming-api-1.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/minha-lista" element={<MinhaLista />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
