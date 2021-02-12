import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from './Button'
import styled from 'styled-components'
//DOclists
import list1 from './docimages/js.png'
import list2 from './docimages/physics.png'
import list3 from './docimages/nodejs.png'
import list4 from './docimages/c.png'
import list5 from './docimages/hashtag.png'
import list6 from './docimages/python.png'

const DocLists = () => {
    return (
        <MainContainer>
            <div className="container">
                <div className="row mx-auto justify-content-center">
                    <div className="card col-md-6 p-2">
                        <img src={list1} alt="..." className="card-img-top mx-auto"/>
                          <div className="card-body">
                              <h3 className="card-title text-center pb-2">
                                  Javascript
                              </h3>
                                <Link to='/doc/info/0'>
                                     <Button className="btn btn-primary text-uppercase">Courses about JS</Button>
                                </Link>
                          </div>
                    </div>

                    <div className="card col-md-6 p-2">
                        <img src={list2} alt="..." className="card-img-top mx-auto"/>
                          <div className="card-body">
                              <h3 className="card-title text-center pb-2">
                                  React js
                              </h3>
                                <Link to='/doc/info/1'>
                                     <Button className="btn btn-primary text-uppercase">Courses about React JS</Button>
                                </Link>
                          </div>
                    </div>
                     
                    <div className="card col-md-6 p-2">
                        <img src={list3} alt="..." className="card-img-top mx-auto"/>
                          <div className="card-body">
                              <h3 className="card-title text-center pb-2">
                                  Node js
                              </h3>
                                <Link to='/doc/info/2'>
                                     <Button className="btn btn-primary text-uppercase">Courses about Node  JS</Button>
                                </Link>
                          </div>
                    </div>


                    <div className="card col-md-6 p-2">
                        <img src={list4} alt="..." className="card-img-top mx-auto"/>
                          <div className="card-body">
                              <h3 className="card-title text-center pb-2">
                                  C++
                              </h3>
                                <Link to='/doc/info/3'>
                                     <Button className="btn btn-primary text-uppercase">Courses about C++</Button>
                                </Link>
                          </div>
                    </div>

                    <div className="card col-md-6 p-2">
                        <img src={list5} alt="..." className="card-img-top mx-auto"/>
                          <div className="card-body">
                              <h3 className="card-title text-center pb-2">
                                  C#
                              </h3>
                                <Link to='/doc/info/4'>
                                     <Button className="btn btn-primary text-uppercase">Courses about C#</Button>
                                </Link>
                          </div>
                    </div>

                    <div className="card col-md-6 p-2">
                        <img src={list6} alt="..." className="card-img-top mx-auto"/>
                          <div className="card-body">
                              <h3 className="card-title text-center pb-2">
                                PHyton
                                </h3>
                                <Link to='/doc/info/5'>
                                     <Button className="btn btn-primary text-uppercase">Courses about Phyton</Button>
                                </Link>
                          </div>
                    </div>

                </div>
            </div>
        </MainContainer>
    )
}

export default DocLists





// Styled components

const MainContainer = styled.div`
 background:black;

 .card-img-top{
     width:10rem;
 }

 @media(min-width:768px){
     .col-md-6 {
         max-width:40% !important;
     }
 }

 .card{
     margin:1rem !important;
     background:transparent;
     border:none;
     
     
 }

 .card-body{
    flex: 1 1 auto;
    padding: 1rem 1rem;
    margin: 0 auto;
 }

 a {
    color: #8b73a0;
    text-decoration: none;
}


h3{
    color: #d4b9b0;
}

h5{
    color: #cde0b3;
}

 .btn{  
    background-color: #6148484d;
    border-color: #886f6f;
    width: 9rem;
    text-size: none;
    font-size: 0.8rem;
    height: 3rem;
    overflow: hidden;
    margin-left: 1rem;
 }
 .btn:hover{
    background-color:white;
    color:black; 
 }



`