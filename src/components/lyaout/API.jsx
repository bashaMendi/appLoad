import axios from 'axios'
import React, { useEffect, useState } from 'react'

function API() {

const [ApiData,setApiData] = useState([]);
        
const API_cars = async () => {
        const {data} = await axios.get('https://www.omdbapi.com/?s=bank&apikey=12828270');//&y=2022
        setApiData(data.Search);
        console.log(data.Search);
        
    }
useEffect(() => {
    API_cars();
},[]);

  return (
    <div>
        <div className='d-'>
            {ApiData.map(function (value,i) {
                return(
            <div className="card" key={i} style={{height:"200px",width:"200px",border:"solid black"}}>
                <img src={value.Poster} alt="" />
            </div>
            )})}
        </div>
    </div>
  )
}

export default API