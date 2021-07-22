import axios from "axios"
import { BASE_URL } from "./credenciais"

export const passageiroCount = axios.create({
    baseURL: `${BASE_URL}/v1/passageiros/count`
})