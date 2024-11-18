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
                "Content-Type":"application/json",
                // Authorization:localStorage.token,
            }
        });
        return respons.data;

    }catch (error){
        console.log(error)
    }


}

/*
const result = await requestAPI("/getItem.php","GET")

*/