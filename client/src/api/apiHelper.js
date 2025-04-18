import axios from "axios";

const baseHpURL = import.meta.env.VITE_HP_BASE_URL

export const getAllCharacters = async () => {
    try {
        const response = await axios.get(`${baseHpURL}/characters`)
        console.log(response.data)
        return response.data
    } catch (error) {
        return error.response
    }
}