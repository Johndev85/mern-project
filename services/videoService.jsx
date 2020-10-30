import axios from "axios"

const API = "https://api-mern-project.herokuapp.com"

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

export const deleteVideo = async (video) => {
    try {
        return await axios.delete(`${API}/videos/${id}`, video)
    } catch (error) {
        return error
    }
}
