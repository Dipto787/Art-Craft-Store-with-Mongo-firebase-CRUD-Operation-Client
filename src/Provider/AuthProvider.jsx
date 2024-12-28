import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Components/firebase.config";

 export let AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    let [loader,setLoader]=useState(true);
    let [user,setUser]=useState(null);

    let createUser=(email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    let signin=(email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    let logOut=()=>{
        setLoader(true);
       return signOut(auth);
    }

    useEffect(()=>{
        let unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setLoader(false);
                setUser(currentUser);
            }
             
        })
        return ()=>unSubscribe();
    },[])
    let userInfo={
        loader,
        user,
        createUser,
        signin,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;