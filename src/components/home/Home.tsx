import React from "react"
import './Home.css';
import foto from './imgs/foto1.png';

function Home() {
    return (
        <>
        <div className="config">
            <div>
                <h1 className="titulo">Seja bem vindo(a)!</h1>
                <p className="pConfig"> Faça aqui as suas postagens!</p>
            </div>
            <div className="fotoD">
                <img src={foto} alt="foto" className="img" />
            </div>
        </div>
        </>
    )
}

export default Home;
