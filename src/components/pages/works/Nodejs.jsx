import React from 'react'
import img from './workslogo/nodejs.png'

const Nodejs = ({data}) => {
    
    
    return (
        
        <div>
           <img src={img} alt="..." style={{width:"3.125rem"}}/>
           
             <h2>{data.works[0].nodejs.title}</h2>
             <p>{data.works[0].nodejs.description}</p>
        </div>
    )
}

export default Nodejs

