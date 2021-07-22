import axios from "axios"
import { BASE_URL } from "./credenciais"

export const corridaCount = axios.create({
    baseURL: `${BASE_URL}/v1/corridas/count`
})