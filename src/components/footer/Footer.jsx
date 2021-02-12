import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <div className="container-fluid ">
                <div className="row pt-5">
                    {/* Colum 1 */}
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-line mx-auto justify-content-center">
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            
                        </ul>
                    </div>

                    {/* Colum 2 */}
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-line mx-auto justify-content-center">
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            
                        </ul>
                    </div>

                    {/* Colum 3 */}
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-line mx-auto justify-content-center">
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            
                        </ul>
                    </div>

                    {/* Colum 4 */}
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-line mx-auto justify-content-center">
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            
                            <Link to="/">
                            <li>lorem ipsum</li>
                            </Link>
                            
                        </ul>
                    </div>
                   
                   <p className="pt-3 pb-2 pl-5 copy-right">
                      &copy;&nbsp;CoolCode
                      {`${new Date().getFullYear()}`}
                      &nbsp; Stay negative 
                   </p>

                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer



const FooterContainer = styled.footer`
     background:#000000f5;

     position:relative;
     bottom:0 !important;
     width:100%;


     ul li{
         list-style:none;
     }

     a{
         color:white;
         text-decoration:none;
         &:hover{
             color:yellow
         }
     }

     .copy-right{
         color:white;
     }

     .pt-5 {
        
        margin-top: -3rem;
        padding-top: 1rem;
        padding-bottom:2rem;
    }

`;