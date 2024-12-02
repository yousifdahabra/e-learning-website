import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./usersSlice"

export const store = configureStore({
    reducer:{
        usersState: userSlice.reducer, // users just names can change and we use them to reference the reducer

        //exmple: exampleReduser 
    }
});


