import React from 'react'

function YearSelect() {
    return (
        <div>
            <div className="year d-flex">
                <div className="p">
                    Top Years
                </div>
                <div className="button">
                    <button style={{border:"none",background:"none",color:"black"}}>1950</button>
                    <button style={{border:"none",background:"none",color:"black"}}>1960</button>
                    <button style={{border:"none",background:"none",color:"black"}}>1970</button>
                    <button style={{border:"none",background:"none",color:"black"}}>1980</button>
                    <button style={{border:"none",background:"none",color:"black"}}>1990</button>
                    <button style={{border:"none",background:"none",color:"black"}}>2000</button>
                    <button style={{border:"none",background:"none",color:"black"}}>2010</button>
                    <button style={{border:"none",background:"none",color:"black"}}>2020</button>
                </div>
            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle px-5 py-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Selection...
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item active" href="#">1950</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
            </div>
        </div>
    )
}

export default YearSelect