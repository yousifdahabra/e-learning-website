import { createContext } from "react";


export const usersContext = createContext()

//provider is the component... it's provide a certin context 
// usersContext.Provider
//it's sprate station between ui
// is an object that can be provider or share multible compmnents and can proviceder what profide do it's porivud a context
const UsersProvider = ({children}) => {

    return (
    <usersContext.Provider value={{ 
        users:[],
        courses:[],
        posts:[],
     }}>
        {children}
    </usersContext.Provider>
    );
};


export default UsersProvider;