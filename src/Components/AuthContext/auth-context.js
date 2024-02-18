import React, { useState } from "react";

const AuthContext=React.createContext({
    token:''
})



export const AuthContextprovider=(props)=>{
    const initialtoken=localStorage.getItem('token')
    // const [completeProfile,setCompleteProfile]=useState(false)
    const [retrievedData,setRetrievedData]=useState()
    console.log('initialToken',initialtoken)

   

    const updateData=(data)=>{
        setRetrievedData(data)
        console.log('Retrieved Data',data)
        console.log('UseState Data',data)
    }

    const contextvalue={
        token:initialtoken,
        profileData:retrievedData,
        data:updateData
    }

    
    return(
        <AuthContext.Provider value={contextvalue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;