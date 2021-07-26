import axios from "axios"
import { BASE_URL } from "./credenciais"

export const corridaCount = axios.create({
    baseURL: `${BASE_URL}/v1/corridas/count`
})

export const serviceCorridasPorMotorista = (motoristaId) =>
    axios.get(`${BASE_URL}/v1/corridas/motoristas/${motoristaId}`);

export const serviceCorridasRecentes = axios.create({
    baseURL: `${BASE_URL}/v1/corridas`
})


export const serviceCadastrarCorrida = axios.create({
    baseURL: `${BASE_URL}/v1/corridas`
})

    
export const serviceDeletarCorrida = (motoristaId) =>
    axios.delete(`${BASE_URL}/v1/corridas/${motoristaId}`)