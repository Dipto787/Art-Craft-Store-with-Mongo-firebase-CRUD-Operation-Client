import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

 const Login = () => {
    let {signin}=useContext(AuthContext);
    let [error,setError]=useState('');  
    let location=useLocation();
    let navigate=useNavigate();
    console.log(location)
     let handleLogin=(e)=>{
            e.preventDefault();
            let form=e.target; 
            let email=form.email.value; 
            let password=form.password.value;  
            setError('');
            signin(email,password)
            .then(result=>{
                navigate(location.state)
                form.reset();
                 Swal.fire({
                                title: "Success To Login",
                                text: "You clicked the button!",
                                icon: "success"
                              });
                console.log(result.user)
            }).catch(error=>console.log(setError(error.message.split('/')[1].slice(0,18))))
             
    
        }
    return (
        <div>
            <div className=" ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                   
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin}  className="card-body">
                             
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                             
                            </div>
                         
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <h1 className="transform-gpu font-semibold text-red-600">{error}</h1>
                                
                            </div>
                            <h1 className="text-center">Don't Have an Account? please <Link to='/register' className="text-blue-700 underline ">Register</Link></h1>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#0e6f2b] rounded-lg text-white font-bold">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;