import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { auth } from "../../firebase.config";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
    let {createUser}=useContext(AuthContext); 
    let [emailError,setEmailError]=useState(''); 
    let [error,setError]=useState('');
    let handleRegister=(e)=>{
        e.preventDefault();
        let form=e.target;
        let name=form.name.value;
        let email=form.email.value;
        let photoUrl=form.photoUrl.value;
        let password=form.password.value;  
        setError('');
        setEmailError('');
        console.log(name,email,photoUrl,password);
        if(password.length<6){
            return setError('Password Should be 6 Length')
        }
        createUser(email,password)
        .then(result=>{
            updateProfile(auth.currentUser,{
                displayName:name,
                photoURL:photoUrl
            })
            Swal.fire({
                title: "Success To Register",
                text: "You clicked the button!",
                icon: "success"
              });
            console.log(result.user)
        }).catch(error=>console.error(setEmailError(error.message.split('/')[1].slice(0,20))))

    }
    return (
        <div>
            <div className=" ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                   
                    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                <h1 className="transform-gpu font-semibold text-red-600">{emailError}</h1>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="PhotoUrl" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <h1 className="transform-gpu font-semibold text-red-600">{error}</h1>
                                
                            </div>
                            <h1 className="text-center">Already Have an Account? please <Link to='/login' className="text-blue-700 underline ">Login</Link></h1>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#0e6f2b] rounded-lg text-white font-bold">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;