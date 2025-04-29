import axios from "axios";

const baseHpURL = import.meta.env.VITE_HP_BASE_URL
const baseURL = import.meta.env.VITE_BASE_URL

export const getAllCharacters = async () => {
    try {
        const response = await axios.get(`${baseHpURL}/characters`)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getAllSpells = async () => {
    try {
        const response = await axios.get(`${baseHpURL}/spells`)
        return response.data
    } catch (error) {
        return error.message
    }
}

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${baseURL}/auth/register`, userData)
        console.log(response)
        return response.data
    } catch (error) {
        return error.message
    }
}

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${baseURL}/auth/login`, userData)
        return response.data
    } catch (error) {
        return error.message
    }
}