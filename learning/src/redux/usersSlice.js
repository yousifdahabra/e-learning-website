import {createSlice} from "@reduxjs/toolkit"

const userSlice  = createSlice({//config objecy
    name:'users',//string
    initialState:{//we can store any state we store object usually  
        list:[],
        select:null,
        loading:false,
    },
    reducers:{//key is name and values as a function 
        startFetching :(_,action)=>{
            return {
                list:[],
                select:null,
                loading:true,        
            };
        },//shoud be object
        userRecived: (_,action)=>{
            const users = action.payload;
            return {
                list:users,
                select:null,
                loading:false,        
            };
        },
        userSelect : (current,action) =>{
            const selectUser = action.payload
            return {
                // list:state.list,
                // select:selectUser, current or whatever name we use it this will coneect with preovus function  
                ...current,
                loading:false,
            };

        },
    },
    
});

export const userReducer = userSlice.reducer; //reducer here and before we using reducers so it's compine them