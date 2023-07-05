import axios from 'axios';

// const BASE_URL = 'https://backend-todo-dy7e.onrender.com/';


export const login  = async (data)=>{
    const res = await axios.post(`https://backend-todo-dy7e.onrender.com/api/login`,{account:data.username,password:data.password});
    // console.log(res.data);
    return res.data
    
}


// console.log(`https://backend-todo-dy7e.onrender.com/api/login`)