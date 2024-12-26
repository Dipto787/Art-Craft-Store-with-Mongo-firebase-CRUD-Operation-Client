import ArtCraftsCard from "./ArtCraftsCard";
import Banner from "./Hero/Banner";

 
const Home = () => {
    return (
        <div className="max-w-6xl mx-auto">
            
           <div className="">
           <Banner></Banner>
           </div>
           <div>
            <ArtCraftsCard></ArtCraftsCard>
           </div>
        </div>
    );
};

export default Home;