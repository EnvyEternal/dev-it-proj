import axios from 'axios'

export const logOut = () =>{
    axios.post("http://localhost:5001/api/logout", {adminId:"4"})
}

export const restart = (cookies) =>{
    return axios.post("http://localhost:5001/api/check",{cookies})
}

export const delNews = (id, cookies) =>{
    return axios.delete(`http://localhost:5001/api/rss/${id}`,{withCredentials: true})
}

export const getRss = (page, phrase, categories) =>{
    return axios.get(`http://localhost:5001/api/rss/${page}`, {params:{phrase, cat: categories}})
}

export const updatePost = (cookies, dataForSend) =>{
    return axios.patch(`http://localhost:5001/api/rss/udateNews`, {cookies, dataForSend})
}

export const createPost = (data, cookies) =>{
    return axios.post('http://localhost:5001/api/rss/createPost', {data, cookies})
}