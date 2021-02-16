import React from 'react'
import notFoundImage from './not_found.png'


const NotFoundPage = () => {
    return (
        <div className="container py-5 d-flex justify-content-center align-items-center  h-100 " style={{height:"100vh"}}>
            <h3>Sorry ,We cant find what you looking for!!!!!!</h3>
            <img src={notFoundImage} alt="..." style={{width:"17rem",marginLeft:"1rem"}}/>
        </div>
    )
}

export default NotFoundPage
