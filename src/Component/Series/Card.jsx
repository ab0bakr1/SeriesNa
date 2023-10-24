import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';

function Card({card}) {
    return (
       <Link to={`/SingleSerie/${card.id}`}  className="card-series px-2 py-3">
            <div className='w-100 h-100' style={{backgroundImage:`url(${card.image.original})` ,backgroundSize:"cover",backgroundPosition:"center"}}>
                <h4>{card.name}</h4>
                <p className='fs-4'>{card.genres[0]+" | "+ card.genres[1] +" | "+ card.genres[2]}</p>
                <h6>{`Status: ${card.status}`}</h6>
                <h5>{`rating: ${card.rating.average}`}</h5>
            </div>
       </Link>
    );
   }
   
export default Card