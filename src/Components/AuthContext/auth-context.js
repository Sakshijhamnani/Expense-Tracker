import React from "react";

const AuthContext=React.createContext({
    token:''
})



export const AuthContextprovider=(props)=>{
    const initialtoken=localStorage.getItem('token')
    console.log('initialToken',initialtoken)

    const contextvalue={
        token:initialtoken
    }

    
    return(
        <AuthContext.Provider value={contextvalue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;