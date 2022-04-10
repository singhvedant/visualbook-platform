
import React from "react"
import data from '../data.json'
const cardDisplay = (props) => {
    
    let code = Number(props.code) || 0
    console.log(data, code)
    let element = data.cards[code]
    
    
    return (
        <div className="card col-md-5">
      <img src={element.imgSrc} alt="" className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{element.title}</h5>
        <p className="card-text">{element.desc}</p>
       <a href={element.src} className="btn btn-outline-primary btn-sm">Learn</a>
      </div>
     </div>
    )
}
export default cardDisplay