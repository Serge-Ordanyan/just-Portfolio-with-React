import React from 'react'
import styled from 'styled-components'

const Avatar = ({docImage}) => {
    return (
        <div>
            <img src={docImage} alt="..." style={{width:"10rem"}}/>
        </div>
    )
}

export default Avatar




const MainContainer = styled.div`
@media(max-width:768px){
    img{
        height:10px
    }
  }
`;