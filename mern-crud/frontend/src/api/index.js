import axios from "axios";

const url = "http://localhost:4000/posts";
var config = {
    headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json',  'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0',}
};

export const fetchPosts = () => axios.get(url,config);
export const createPost=(newPost)=>axios.post(url,newPost)
export const updatePost=(id,updatedPost)=>axios.patch(`${url}/${id}`)