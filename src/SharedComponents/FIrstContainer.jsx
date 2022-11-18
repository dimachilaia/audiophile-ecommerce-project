// header , რომელშიც არი კალათა და ჩამონათვალი header ის...

import React,{useState} from 'react'
import styled from 'styled-components'
import burgerImage from '../assets/icon-hamburger.svg'
import cartimage from '../assets/Combined Shape.svg'
import audioimage from '../assets/audiophile.svg'
import TabletChangedHeader from '../components/TabletChangedHeader'
import SmallCart from '../components/SmallCart'
import { Link } from 'react-router-dom'
import ScrollingHead from '../components/ScrollingHead'

const FIrstContainer = ({showScroll, setShowScroll, showCart, setShowCart,}) => {

  const showScrollHandler=()=>{
    setShowScroll(prev=>!prev);
}

const showCartHandler = ()=>{
    setShowCart(!showCart);
}

  return (
    <MainHead>
    <Head>
        <MobileImage>
            <img src={burgerImage} alt="burgerimg" style={{width:'17px', height:'16px', cursor:'pointer'}} onClick={showScrollHandler}/>
            </MobileImage>
            <Link to="/">
              <img src={audioimage} alt="textimage"/>
            </Link>
            <TabletChangedHeader/>
            <img src={cartimage} alt="cartimg" onClick={showCartHandler} style={{cursor:'pointer'}}/>
            </Head>
            <hr/>
              {showCart &&  <SmallCart/>}
              {showScroll && <ScrollingHead setShowScroll={setShowScroll} showScroll={showScroll}/>}
         </MainHead>
  )
}

export default FIrstContainer

const MainHead = styled.div`
  height:235px;
  background-color:rgb(25, 25, 25);
 hr{
  mix-blend-mode: normal;
  opacity: 0.1;
  transform:translateY(30px);
 }
`

const Head = styled.div`
  display:flex;
  padding-top:30px;
  align-items:center;
  justify-content:space-around;
  gap:30px;
  width:100%;
  h6{
    color:white;
    font-size:20px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 900;
  }
`

const MobileImage = styled.div`
  @media screen and (min-width: 768px) {
    display:none;
  }
`