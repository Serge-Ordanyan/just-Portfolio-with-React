import React from 'react'
import {NavLink,Route,Redirect} from 'react-router-dom'
import worksData from './data/works.json'
import styled from 'styled-components'
import Nodejs from './Nodejs'
import Angular from './Angular'
import Django from './Django'
import Vuejs from './Vuejs'
import Scalla from './Scalla'
import Footer from '../../footer/Footer'


const Works = () => {
    return (
        
        <MainContainer>
            <div className="container py-5">
                <h2 className="text-center mt-5 pt-3 pb-5 text-uppercase">Need Developers</h2>
                <NavLink  to="/works/nodejs" className="badge badge-secondary p-2 m-2">
                    Node js

                </NavLink> 
                
                <NavLink  to="/works/angular" className="badge badge-secondary p-2 m-2">
                    Angular

                </NavLink>
                
                <NavLink  to="/works/django" className="badge badge-secondary p-2 m-2">
                    Django

                </NavLink>
                
                <NavLink  to="/works/vuejs" className="badge badge-secondary p-2 m-2">
                    Vue js

                </NavLink>
                
                <NavLink  to="/works/scalla" className="badge badge-secondary p-2 m-2">
                    
                   Scalla
                </NavLink>
                <Redirect to="/works/nodejs"/>
                <Route path="/works/nodejs" render={() => <Nodejs data={worksData}/>} />
                <Route path="/works/angular" render={() => <Angular data={worksData}/>} />
                <Route path="/works/django" render={() => <Django data={worksData}/>} />
                <Route path="/works/vuejs" render={() => <Vuejs data={worksData}/>} />
                <Route path="/works/scalla" render={() => <Scalla data={worksData}/>} />
            </div>
            <Footer/>
        </MainContainer>
        
        
    )
}

export default Works


const MainContainer = styled.div`

background:#ada9a9c7;


.py-5 {
   
    padding-bottom: 3rem!important;
}

.active{
    background:var(--primary-white);
    color:black;
    &:focus{
        background:var(--primary-orange);
    }
}

`;






