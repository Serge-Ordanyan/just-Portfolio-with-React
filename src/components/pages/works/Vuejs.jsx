import React from 'react'
import img from './workslogo/vuejs.png'

const Vuejs = ({data}) => {
    return (
        <div>
            <img src={img} alt="..." style={{width:"3.125rem"}}/>
            <h2>{data.works[3].vuejs.title}</h2>
            <p>{data.works[3].vuejs.description}</p>
        </div>
    )
}

export default Vuejs
