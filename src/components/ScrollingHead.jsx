// Mobile Burger Menu

import React, { useState } from 'react'
import headphoneimage from '../assets/headphone.png'
import speakerimage from '../assets/fi.svg'
import earphonesimage from '../assets/fo.svg'
import pathimage from '../assets/Path 2.svg'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const ScrollingHead = ({showScroll, setShowScroll}) => {

  const showScrollHandler = ()=>{
    setShowScroll(prev=>!prev)
  }

  return (
   <ScrollHeader showScroll={showScroll}>
        <div>
          <img src={headphoneimage} alt="headphone" />
          <div>
          <NavLink to="/headphones" style={{color:'#000000', textDecoration:'none'}} onClick={showScrollHandler}>HEADPHONES</NavLink>
          <h6>SHOP
          <img src={pathimage} alt="pathimage"/>
         </h6>
          </div>
        </div>

          <div>
            <img src={speakerimage} alt="speakerimg" />
            <div>
            <NavLink to="/speakers" style={{color:'#000000', textDecoration:'none'}} onClick={showScrollHandler}>SPEAKERS</NavLink>
            <h6>SHOP
             <img src={pathimage} alt="pathimage"/>
            </h6>
            </div>
          </div>

          <div>
            <img src={earphonesimage} alt="earphone" />
            <div>
            <NavLink to="/earphones" style={{color:'#000000', textDecoration:'none'}} onClick={showScrollHandler}>EARPHONES</NavLink>
            <h6>SHOP
            <img src={pathimage} alt="pathimage"/>
           </h6>
            </div>
          </div>
       </ScrollHeader> 
    
  )
}

export default ScrollingHead

const ScrollHeader = styled.div`

position:absolute;
color:white;
width:100%;
z-index:1;
display:flex;
flex-direction:column;
align-items:center;
background-color:white;
margin-top:33px;
height:100vh;
display:${(props)=>props.showScroll && "flex"};

  div{
    display:flex;
    width:90%;
    justify-content:center;
    flex-direction:column;
    background-color:#F1F1F1;
    height:165px;
    align-items:center;
    text-align:center;
    border-radius: 8px;
    gap:20px;
 
    margin-top:50px;
  }
  span{
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 1.07143px;
    text-transform: uppercase;
    color: #000000;
  }
  h6{
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    img{
      margin:3px 10px;
    }
  } 
  img{
    position:absolute;
    margin-bottom:150px;
 }
 @media screen and (min-width: 768px) {
    display:none;
  }
`