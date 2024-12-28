import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";

 
const ProtectedRoute = ({children}) => {
    let {user,loader}=useContext(AuthContext);
    let location=useLocation(); 
    if(user){
        return children;
    } 
    if(loader){
        return  <div className="flex justify-center items-center"><span className="loading text-center loading-spinner"></span></div>
    }
    return  <Navigate  state={location.pathname} to={'/login'}></Navigate>
     
};

export default ProtectedRoute;