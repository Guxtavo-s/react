import axios from 'axios'

export const api = axios.create({
baseURL: 'https://blogpessoal-1xwi.onrender.com/'
})

export const login = async (url: any, dados: any, setDados: any) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data.token)
}

export const cadastroUsuario = async(url: any,dados: any,setDados: any) => { 
  const resposta = await api.post(url,dados)
  setDados(resposta.data)
}

export const getAll = async(url: any, setDados: any, header: any) => { 
  const resposta = await api.get(url,header)
  setDados(resposta.data)
}

export const getId = async(url: any, setDados: any, header: any) => { 
  const resposta = await api.get(url,header)
  setDados(resposta.data)
}

export const post = async(url: any, dados: any, setDados: any, header: any) => { 
  const resposta = await api.post(url, dados, header)
  setDados(resposta.data)
}

export const put = async(url: any, dados: any, setDados: any, header: any) => { 
  const resposta = await api.put(url, dados, header)
  setDados(resposta.data)
}

export const deleteId = async(url: any, header: any) => { 
  await api.delete(url, header)
}



