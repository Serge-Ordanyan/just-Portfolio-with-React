import React from 'react'
import img from './workslogo/angular.png'

const Angular = ({data}) => {
    return (
        <div>
            <img src={img}  style={{width:"3.125rem"}}/>
            <h2>{data.works[1].angular.title}</h2>
            <p>{data.works[1].angular.description}</p>
        </div>
    )
}

export default Angular
