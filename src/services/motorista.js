import axios from "axios"
import { BASE_URL } from "./credenciais"

export const motoristaCount = axios.create({
    baseURL: `${BASE_URL}/v1/motoristas/count`
})

export const getMotoristas = axios.create({
    baseURL: `${BASE_URL}/v1/motoristas`
})

export const getMotoristaPorId = ({motoristaId}) => 
    axios.get(`${BASE_URL}/v1/motoristas/${motoristaId}`)

export const existMotoristaByCPF = (cpf) => {
    axios.get(`${BASE_URL}/v1/motoristas/cpf/${cpf}`)
}

export const cadastroMotorista = axios.create({
    baseURL: `${BASE_URL}/v1/motoristas`
})

export const atualizarMotorista = axios.create({
    baseURL: `${BASE_URL}/v1/motoristas`
})

export const serviceAtivarMotorista = ({motoristaId}) => 
    axios.put(`${BASE_URL}/v1/motoristas/${motoristaId}/ativar`)

export const serviceInativarMotorista = ({motoristaId}) => 
    axios.put(`${BASE_URL}/v1/motoristas/${motoristaId}/inativar`)

export const deletarMotorista = (motoristaId) => {
    axios.delete(`${BASE_URL}/v1/motoristas/${motoristaId}`)
}