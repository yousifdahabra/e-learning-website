import {createSlice} from "@reduxjs/toolkit"

const userSlice  = createSlice({//config objecy
    name:'users',//string
    initialState:{//we can store any state but it's not usefull ? NO ... we store object usually  
        list:[],
        // select:null,
        // loading:false,
    },
    reducers:{//key is name and values as a function 
        loadUsers :(state,action)=>{//loadUsers :(_,action) => _ is a state we can set any name
            const users = action.payload

            return {
                ...state,
                list:users,
                // select:null,
                // loading:true,        
            };
        },//shoud be object
        createUser: (state,action)=>{
            const created = action.payload;
            return {
                ...state,
                list:[...state.list,created],//for add new user to list
                // select:null,
                // loading:false,        
            };
        },
        editUser : () =>{
            // const selectUser = action.payload
            // return {
            //     // list:state.list,
            //     // select:selectUser, current or whatever name we use it this will coneect with preovus function  
            //     ...current,
            //     loading:false,
            // };

        },
        deleteUser : () =>{
            // const selectUser = action.payload
            // return {
            //     // list:state.list,
            //     // select:selectUser, current or whatever name we use it this will coneect with preovus function  
            //     ...current,
            //     loading:false,
            // };

        },
        banUser : () =>{
            // const selectUser = action.payload
            // return {
            //     // list:state.list,
            //     // select:selectUser, current or whatever name we use it this will coneect with preovus function  
            //     ...current,
            //     loading:false,
            // };

        },
    },
    
});

// export const usersActions = userSlice.actions;
export default userSlice; //reducer here and before we using reducers so it's compine them