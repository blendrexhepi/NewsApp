import React from 'react'
import  img from '../asets/oops.jpg' 

const NewsItem = ({title,description,url,src}) => {
  return (
<div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth: "380px"}}>
  <img src={src?src : img } style={{height:"200px", width:"360px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"This is news is not possible for the moment, please look again after some time"}</p>
    <a href={url} className="btn btn-primary">See More</a>
  </div>
</div> 
 )
}

export default NewsItem