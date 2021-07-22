import axios from "axios"
import { BASE_URL } from "./credenciais"

export const motoristaCount = axios.create({
    baseURL: `${BASE_URL}/v1/motoristas/count`
})