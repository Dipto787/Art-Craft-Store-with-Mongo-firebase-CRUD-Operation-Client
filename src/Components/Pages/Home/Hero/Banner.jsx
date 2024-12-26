
const Banner = () => {
    return (
        <div>
            <div className="carousel h-[500px]  rounded-lg  w-full">
                <div id="slide1" className="carousel-item    h-[450px]  relative w-full">
                    <img  
                        src="https://i.ibb.co.com/LxJC7Jg/pexels-pixabay-159644.jpg"
                        className="w-full     " />
                    <div className="absolute left-5   right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item    relative w-full">
                    <img
                        src="https://i.ibb.co.com/1bBYVDb/pexels-freestockpro-2836955.jpg"
                        className="w-full " />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item  relative w-full">
                    <img
                        src="https://i.ibb.co.com/H7yP35c/pexels-magda-ehlers-pexels-1331705.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item  relative w-full">
                    <img
                        src="https://i.ibb.co.com/tJKVD4z/pexels-sarah-dietz-983041-3855554.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;