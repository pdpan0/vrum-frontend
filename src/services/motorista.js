import axios from "axios"
import { BASE_URL } from "./credenciais"

export const motoristaCount = axios.create({
    baseURL: `${BASE_URL}/v1/motoristas/count`
})

export const listaMotoristas = axios.create({
    baseURL: `${BASE_URL}/v1/motoristas`
})

export const cadastroMotorista = axios.create({
    baseURL: `${BASE_URL}/v1/motoristas`
})

export const deletarMotorista = (motoristaId) => {
    axios.delete(`${BASE_URL}/v1/motoristas/${motoristaId}`)
}

export const existMotoristaByCPF = (cpf) => {
    axios.get(`${BASE_URL}/v1/motoristas/cpf/${cpf}`)
}