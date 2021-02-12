import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar'
import {Link, useParams} from 'react-router-dom';
import {Button} from './Button'

//DOclists
import list1 from './docimages/js.png'
import list2 from './docimages/physics.png'
import list3 from './docimages/nodejs.png'
import list4 from './docimages/c.png'
import list5 from './docimages/hashtag.png'
import list6 from './docimages/python.png'



const Docs = [
    {
        id:0,
        docImg:list1,
        name:'Javascript',
        occupation:'Javascript actual webdev language',
        description:'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. ',
        link:"https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/"
    },

    {
        id:1,
        docImg:list2,
        name:'React',
        occupation:'Cool stuff',
        description:'react is maybe most popular library(framevork) for JS. ',
        link:'https://ru.reactjs.org/'
    },

    {
        id:2,
        docImg:list3,
        name:'Nodejs',
        occupation:'seriosly stuff',
        description:'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment ',
        link:'https://nodejs.org/en/docs/'
    },

    {
        id:3,
        docImg:list4,
        name:'C++',
        occupation:'great stuff',
        description:'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language ',
        link:'https://devdocs.io/cpp/'
    },

    {
        id:4,
        docImg:list5,
        name:'C#',
        occupation:'was cool stuff',
        description:'C# (pronounced "See Sharp") is a modern, object-oriented, and type-safe programming language. ',
        link:'https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/'
    },

    {
        id:5,
        docImg:list6,
        name:'Phyton',
        occupation:'Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but x to object-oriented programming ',
        description:'Python is an easy to learn, powerful programming language. It has efficient high-level data structures and a simple but effective approach to object-oriented programming ',
        link:'https://docs.python.org/3/tutorial/index.html'
    },

]

const DocInfo = () => {
    let {id} = useParams();
    let docs = Docs[parseInt(id,6)]
    return (
        <MainContainer>
          <div className="container mb-5">
              <div className="card">
                  <Avatar docImage={docs.docImg} />
                  <h3>{docs.name}</h3>
                  <div className="card-body px-0">
                     <h5 className="card-title">{docs.occupation}</h5>
                     <p className="card-text">{docs.description}</p>
                     <Link to='/doc-list'>
                         <Button className='btn btn-primary text-uppercase'>
                             Back to Docs
                         </Button>
                     </Link>
                     <a href={docs.link}>documentations about {docs.name}</a>
                  </div>
              </div>
          </div>
            
        </MainContainer>
    )
}

export default DocInfo


//styled components
const MainContainer = styled.div`

background:black;

.card{
    background:transparent;
    border:none;
    margin :4rem 4rem 4rem 4rem !important;
    
    
}

h3{
    color:white;
    padding-top:1rem;
}

h5{
    color:white
}

p{
    color:white;
}

a{
    text-decoration:none;
    margin-left:1rem;
}

.btn{
    background-color: black;
    border-color: #f5af2f;
}
.btn::hover{
    background:white:
    color:black;
}
`;