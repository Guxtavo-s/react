import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import foto from './imgs/foto1.png';
import TabPostagem from '../postagens/tabpostagem/TabPostagem';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" className="titulo">Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Faça as suas postagens aqui!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={foto} alt="Imagem" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens' >
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

{/* <div className="config">
            <div>
                <h1 className="titulo">Seja bem vindo(a)!</h1>
                <p className="pConfig"> Faça aqui as suas postagens!</p>
            </div>
            <div className="fotoD">
                <img src={foto} alt="foto" className="img" />
            </div>
        </div> */}