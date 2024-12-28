import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddCraftItem = () => {
    let {user}=useContext(AuthContext);
    console.log(user.metadata.lastSignInTime)
    let handleAddCraftItem=(e)=>{
        e.preventDefault();
        let form=e.target;
        let image=form.image.value;
        let  item_name=form.item_name.value; 
        let  subcategory_Name=form.subcategory_name.value; 
        let  short_description=form.short_description.value; 
        let  price=form.price.value; 
        let  rating=form.rating.value; 
        let lastSignInTime=user.metadata.lastSignInTime;
        let email=user.email;
        let name=user.displayName;
        let CraftItem={image,item_name,subcategory_Name,short_description,price,rating,lastSignInTime,email,name};
        console.log(CraftItem);
        fetch('http://localhost:5000/addCraftItem',{
            method:'POST',
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify(CraftItem)
        }).then(res=>res.json() )
           .then(result=>{
            console.log(result)
           })     

    }
    return (
        <div className="m-20">
          <form onSubmit={handleAddCraftItem} action="" className="space-y-2">
          <div className="flex justify-between px-8">
            <label className="form-control w-full max-w-lg">
                <div className="label">
                    <span className="label-text">image</span> 
                </div>
                <input name="image" placeholder="use image URL" type="text" className="file-input p-4 file-input-bordered  w-full" /> 
            </label>
            <label className="form-control w-full max-w-lg">
                <div className="label">
                    <span className="label-text"> Item Name</span> 
                </div>
                <input type="text" name="item_name" placeholder="item_name" className="file-input p-4 file-input-bordered  w-full " /> 
            </label>
            </div>


            <div className="flex justify-between px-8">
            <label className="form-control w-full max-w-lg">
                <div className="label">
                    <span className="label-text">subcategory_Name</span> 
                </div>
                <input name="subcategory_name" placeholder="subcategory_Name" type="text" className="file-input p-4 file-input-bordered  w-full" /> 
            </label>
            <label className="form-control w-full max-w-lg">
                <div className="label">
                    <span className="label-text">short description</span> 
                </div>
                <input type="text" name="short_description" placeholder="short description" className="file-input p-4 file-input-bordered  w-full " /> 
            </label>
            </div>


            <div className="flex justify-between px-8">
            <label className="form-control w-full max-w-lg">
                <div className="label">
                    <span className="label-text">price</span> 
                </div>
                <input name="price" placeholder="price" type="text" className="file-input p-4 file-input-bordered  w-full" /> 
            </label>
            <label className="form-control w-full max-w-lg">
                <div className="label">
                    <span className="label-text">rating</span> 
                </div>
                <input type="text" name="rating" placeholder="rating" className="file-input p-4 file-input-bordered  w-full " /> 
            </label>
            </div>
           <div className="px-8">
           <button className="btn text-white font-bold bg-[#219ebc] mt-3 btn-block">Add</button>
           </div>
        
          </form>


       
        </div>
    );
};

export default AddCraftItem;