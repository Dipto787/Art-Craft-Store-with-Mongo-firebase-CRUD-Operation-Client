import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../../Footer";

 
const Root = () => {
    return (
        <div>
         <div className="max-w-6xl mx-auto">
         <Navbar></Navbar>
         </div>
          <Outlet></Outlet>
          <div className="mt-8">
            <Footer></Footer>
          </div>
        </div>
    );
};

export default Root;