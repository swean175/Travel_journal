
import React from "react"

export default function Main(props){
    return (
          
         <div className="card">
           <img src={`${props.item.imageUrl}`} className = "photo"/>
           <main>
           <div className ="location">
           <i className="fa-solid fa-location-dot"></i>
           <h4>{props.item.location}</h4>
           <a href={`"${props.item.googleMapsUrl}"`} >View on Google Maps</a>
           </div>
           <h1>{props.item.title}</h1>
           <div className="date">
           <span>{props.item.endDate}</span>
           <span>{props.item.startDate}</span>
           
           </div>
           <p>{props.item.description}</p>
           </main>
          </div>
          )
   }