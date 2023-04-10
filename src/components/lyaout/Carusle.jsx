import React from 'react'

function Carusle() {
    return (
        <div>
            <button style={{ backgroundColor: "yellow", border: "none", borderRadius: "5px", position: "absolute", zIndex: "200", top: "300px", left: "250px", padding: "7px" }}>More Information</button>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ backgroundImage: "url('https://m.media-amazon.com/images/M/MV5BMGQwOGM3ODAtM2Q3Yy00YzhmLWFhYWMtMjM3OTZmNDFhYzVkXkEyXkFqcGdeQXVyMTE2NDE2Njcy._V1_SX300.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "center", backgroundPositionY: "top", height: "50vh" }}>
                    </div>
                    <div className="carousel-item active" style={{ backgroundImage: "url('https://m.media-amazon.com/images/M/MV5BMGQwOGM3ODAtM2Q3Yy00YzhmLWFhYWMtMjM3OTZmNDFhYzVkXkEyXkFqcGdeQXVyMTE2NDE2Njcy._V1_SX300.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "center", backgroundPositionY: "top", height: "50vh" }}>
                    </div>
                    <div className="carousel-item active" style={{ backgroundImage: "url('https://m.media-amazon.com/images/M/MV5BMGQwOGM3ODAtM2Q3Yy00YzhmLWFhYWMtMjM3OTZmNDFhYzVkXkEyXkFqcGdeQXVyMTE2NDE2Njcy._V1_SX300.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "center", backgroundPositionY: "top", height: "50vh" }}>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carusle