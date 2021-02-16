import React from 'react'
import img from './workslogo/scalla.png'

const Scalla = ({data}) => {
    return (
        <div>
            <img src={img} alt="..." style={{width:"3.125rem"}}/>
            <h2>{data.works[4].scalla.title}</h2>
            <p>{data.works[4].scalla.description}</p>
        </div>
    )
}

export default Scalla
