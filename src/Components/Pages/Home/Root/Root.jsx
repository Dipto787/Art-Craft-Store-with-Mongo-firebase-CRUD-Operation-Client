import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

 
const Root = () => {
    return (
        <div>
         <div className="max-w-6xl mx-auto">
         <Navbar></Navbar>
         </div>
          <Outlet></Outlet>
        </div>
    );
};

export default Root;