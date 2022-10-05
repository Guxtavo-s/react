import axios from 'axios'

export const api = axios.create({
baseURL: 'https://blogpessoal-1xwi.onrender.com/'
})

export const login = async (url: any, dados: any, setDados: any) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

export const cadastroUsuario = async(url: any,dados: any,setDado: any) => { 
  const resposta = await api.post(url,dados)
  setDado(resposta.data.token)
}