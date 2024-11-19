import axios from 'axios'

axios.defaults.baseURL = "http://localhost/learning/back/";

export const requestAPI =  async({route,method = 'GET' ,body,header='application/json'}) =>{
    //route like api file php
    //method post/get
    //body is data
    //ON PHP SET Authorization 
    //multipart/form-data for image hundel in side back using $_POST
    try{
        const respons = await axios.request({
            url:`${route}.php`,
            method,
            data:body,
            headers:{
                'Content-Type': header,
                // "Content-Type":"application/json",
                Authorization:localStorage.token,
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