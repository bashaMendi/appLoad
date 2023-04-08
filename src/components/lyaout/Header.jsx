import React from "react";

function Header() {
    return (
        <div className="navbar">
             <div className="caver">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adobe.com%2Fcreativecloud%2Fphotography%2Fdiscover%2Fgolden-hour.html&psig=AOvVaw268QBqH2LlizDfnlQTaLd-&ust=1680960656662000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjg-8nwl_4CFQAAAAAdAAAAABAF" class="d-block w-100" alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adobe.com%2Fcreativecloud%2Fphotography%2Fdiscover%2Fgolden-hour.html&psig=AOvVaw268QBqH2LlizDfnlQTaLd-&ust=1680960656662000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjg-8nwl_4CFQAAAAAdAAAAABAF" class="d-block w-100" alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adobe.com%2Fcreativecloud%2Fphotography%2Fdiscover%2Fgolden-hour.html&psig=AOvVaw268QBqH2LlizDfnlQTaLd-&ust=1680960656662000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjg-8nwl_4CFQAAAAAdAAAAABAF" class="d-block w-100" alt="" />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container" style={{ height: "60px" }}>
                <div className="logo">
                    <img
                        src=" https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Logo_of_Garena_Free_Fire.png/1280px-Logo_of_Garena_Free_Fire.png"
                        height="80px"
                        alt=""
                    />
                </div>
                <div className="input-search">
                    <input
                        type="text"
                        placeholder="   search here..."
                        className="rounded-4 border px-3 text-center"
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
