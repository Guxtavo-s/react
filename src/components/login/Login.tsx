import React, {ChangeEvent, useState, useEffect} from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Services';
import UsuarioLogin from '../../models/UsuarioLogin';
import './Login.css';

function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: '',
    });

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

        useEffect(()=>{
            if(token != ''){
                navigate('/home')
            }
        }, [token]);

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try{
            await login(`/usuarios/logar`, userLogin, setToken)
            alert('Usuário logado com sucesso!');
        }catch(error){
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }

    }

    return (
        <Grid container className='grid1'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom  component='h3' align='center' className='textos1 cor'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth  style={{backgroundColor:'#eeeeee', borderRadius: '15px'}}/>
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth style={{backgroundColor:'#eeeeee', borderRadius: '15px'}} />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='outlined' className='botao'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className='cor'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/CadastroUsuario' className='text-decorator-none'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1 cor'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login;

