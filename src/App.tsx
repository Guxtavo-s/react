import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './components/login/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CadastroUsuario from './components/cadastroUsuario/CadastroUsuario';

function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes> 
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cadastrousuario" element={<CadastroUsuario />} />
    </Routes>
    </div>
    <Footer />
    </ BrowserRouter >
    
  );
}

export default App;
