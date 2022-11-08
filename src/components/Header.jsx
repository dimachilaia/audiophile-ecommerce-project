import React from 'react'
import headerbgimg from '../assets/home/mobile/image-header.jpg'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeadComp >
    <FirstHeaderCont>
        <div>
            <p>dima</p>
        </div>    
    </FirstHeaderCont>
    </HeadComp>
  )
}

export default Header
const HeadComp = styled.div`
 background-color:rgb(25, 25, 25)
`
const FirstHeaderCont = styled.div`
 background-image:url(${headerbgimg});
 background-repeat:no-repeat;
 background-size:cover;
 height:640px;
 width:300px;
 margin:0 auto;
`