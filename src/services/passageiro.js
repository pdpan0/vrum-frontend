import axios from "axios"
import { BASE_URL } from "./credenciais"

export const passageiroCount = axios.create({
    baseURL: `${BASE_URL}/v1/passageiros/count`
})

export const listaPassageiros = axios.create({
    baseURL: `${BASE_URL}/v1/passageiros`
})

export const passageiroPorId = (passageiroId) => 
    axios.get(`${BASE_URL}/v1/passageiros/${passageiroId}`)

export const cadastroPassageiro = axios.create({
    baseURL: `${BASE_URL}/v1/passageiros`
})
export const deletarPassageiro = (passageiroId) => 
    axios.delete(`${BASE_URL}/v1/passageiros/${passageiroId}`)