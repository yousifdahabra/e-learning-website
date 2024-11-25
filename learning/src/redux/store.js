import {configureStore} from "@reduxjs/toolkit"
import {userReducer} from "./usersSlice"

export const store = configureStore({
    reducer:{
        users: userReducer, // users just name can change

        //exmple: exampleReduser 
    }
});


