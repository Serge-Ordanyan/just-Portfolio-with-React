import React from 'react'
import img from './workslogo/django.png'

const Django = ({data}) => {
    return (
        <div>
            <img src={img} alt="..." style={{width:"3.125rem"}}/>
            <h2>{data.works[2].django.title}</h2>
            <p>{data.works[2].django.description}</p>
        </div>
    )
}

export default Django
