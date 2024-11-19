import axios from 'axios'

axios.defaults.baseURL = "http://localhost/learning/back/";

export const requestAPI =  async({route,method = 'GET' ,body}) =>{
    //route like api file php
    //method post/get
    //body is data
    //ON PHP SET Authorization 
    try{
        const respons = await axios.request({
            url:`${route}.php`,
            method,
            data:body,
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                // "Content-Type":"application/json",
                // Authorization:localStorage.token,
            }
        });
        return respons.data;

    }catch (error){
        return error;
    }


}

/*
const result = await requestAPI("/getItem.php","GET")

*/