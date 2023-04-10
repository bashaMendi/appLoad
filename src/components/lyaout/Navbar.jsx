import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="px-4" style={{ height: "60px", display: "flex", alignItems: "center", width: "100vw", justifyContent: "space-between",position: "absolute", top: "10px", zIndex: "100" }}>
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
    )
}

export default Navbar