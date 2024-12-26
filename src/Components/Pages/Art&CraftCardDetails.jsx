import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ArtCraftCardDetails = () => {
    // let [loadedUserData, setLoadedUserData] = useState(null);
 
    let loadedData = useLoaderData();
     
     
    return (
        <div className="max-w-6xl mx-auto">
          {
           
                <div className="card rounded-none gap-4 p-8 card-side bg-base-100 shadow-xl">
                <figure>
                    <img className="w-[450px] h-[400px] rounded-xl"
                        src={loadedData.image} 
                        alt="Movie" 
                        />
                </figure>
                <div className="space-y-4 ">
                    <h2 className="card-title">{loadedData.storeName}</h2>
                    <p>{loadedData.description}</p>
              <div className="flex justify-between px-16">
              <div className="flex items-center"><p className="mr-2">Category : </p> <span className="bg-[#409400] rounded-full p-1 text-black font-bold px-4">{loadedData.category}</span></div>
              <div className="flex">
                <p>Contact : </p>
                <span className="font-bold">{loadedData.contact}</span>
              </div>
              </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
          
          }
        </div>
    );
};

export default ArtCraftCardDetails;