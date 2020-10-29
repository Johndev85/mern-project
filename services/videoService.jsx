import axios from "axios"

const API = "http://localhost:3001"

export const getVideos = async () => {
    try {
        return await axios.get(`${API}/videos`)
    } catch (error) {
        return error
    }
}

export const createVideo = async (video) => {
    try {
        return await axios.post(`${API}/videos`, video)
    } catch (error) {
        return error
    }
}
