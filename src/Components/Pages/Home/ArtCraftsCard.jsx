import { useLoaderData } from "react-router-dom";

 
const ArtCraftsCard = () => {
    let loadedData=useLoaderData();
    console.log(loadedData)
    return (
        <div>
            <div className="grid gap-4 md:grid-cols-3">
            {
                loadedData.map(card=>
                (<div key={card.id} className="card border-2 p-3 rounded-none h-[450px]   ">
                    <figure>
                      <img
                        src={card.image}
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{card.storeName}</h2>
                      <p>{card.description}</p>
                      <div className="card-actions justify-end">
                        <button className="btn w-full bg-[#ff595e] text-white font-bold">View Details</button>
                      </div>
                    </div>
                  </div>))
            }
            </div>
        </div>
    );
};

export default ArtCraftsCard;