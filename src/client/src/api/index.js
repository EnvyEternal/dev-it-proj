import axios from 'axios'


export const restart = () =>{
    return axios.get("http://localhost:5001/api/check", {withCredentials: true})
}

export const delNews = (id) =>{
    return axios.delete(`http://localhost:5001/api/rss/${id}`,{withCredentials: true})
}

export const getRss = (page, phrase, categories) =>{
    return axios.get(`http://localhost:5001/api/rss/${page}`, {params:{phrase, cat: categories}})
}

export const updatePost = (dataForSend) =>{
    return axios.patch(`http://localhost:5001/api/rss/udateNews`, {dataForSend}, {withCredentials: true})
}

export const createPost = (data) =>{
    return axios.post('http://localhost:5001/api/rss/createPost', {data}, {withCredentials: true})
}

export const login = (adminData) =>{
    return axios.post("http://localhost:5001/api/get", adminData, { withCredentials: true })
}

export const allModerator = () =>{
    return axios.get("http://localhost:5001/api/getModerators", { withCredentials: true })
}

export const createModerator = (data) =>{
    return axios.post("http://localhost:5001/api/createModerator",{data},{ withCredentials: true })
}

export const deleteModerator = (data) =>{
    return axios.delete(`http://localhost:5001/api/delete/${data}`,{withCredentials: true})
}
