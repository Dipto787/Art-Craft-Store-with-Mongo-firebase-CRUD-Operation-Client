import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Components/firebase.config";

 export let AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    let [user,setUser]=useState(null);

    let createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    let logOut=()=>{
       return signOut(auth);
    }
    useEffect(()=>{
        let unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser)
            }
             
        })
        return ()=>unSubscribe();
    },[])
    let userInfo={
        user,
        createUser,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;