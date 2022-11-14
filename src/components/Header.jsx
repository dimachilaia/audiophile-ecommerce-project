import React, { useState } from 'react'
import headerbgimg from '../assets/home/mobile/image-header.jpg'
import styled from 'styled-components';
import burgerImage from '../assets/icon-hamburger.svg'
import cartimage from '../assets/Combined Shape.svg'
import audioimage from '../assets/audiophile.svg'
import headphoneimage from '../assets/headphone.png'
import speakerimage from '../assets/fi.svg'
import earphonesimage from '../assets/fo.svg'
import pathimage from '../assets/Path 2.svg'
import SmallCart from './SmallCart';
import TabletChangedHeader from './TabletChangedHeader';
import desktopimage from '../assets/home/desktop/image-hero.jpg'
import Sections from './Sections';

const Header = () => {
  const [showScroll, setShowScroll] = useState(false)
  const [showCart, setShowCart] = useState(false)


 const showScrollHandler = ()=>{
    setShowScroll(prev=>!prev);
 }

  const showCartHandler = ()=>{
    setShowCart(!showCart);
 }

  return (
    <FirstHeader >
      <MainHeader>
       <Head>
       <MobileImage>
        <img src={burgerImage} alt="burgerimg" style={{width:'17px', height:'16px', cursor:'pointer'}} onClick={showScrollHandler}/>
        </MobileImage>
        <img src={audioimage} alt="textimage"/>
        <TabletChangedHeader/>
        <img src={cartimage} alt="cartimg" onClick={showCartHandler} style={{cursor:'pointer'}}/>
        </Head>
        <hr/>

        {showCart && <SmallCart showCart = {showCart}/> }
      
    { showScroll && <ScrollHeader >
     <div>
          <img src={headphoneimage} alt="headphone" />
          <div>
          <h4>HEADPHONES</h4>
          <h6>SHOP
          <img src={pathimage} alt="pathimage"/>
         </h6>
          </div>
        </div>

          <div>
            <img src={speakerimage} alt="headphone" />
            <div>
            <h4>SPEAKERS</h4>
            <h6>SHOP
             <img src={pathimage} alt="pathimage"/>
            </h6>
            </div>
          </div>

          <div>
            <img src={earphonesimage} alt="headphone" />
            <div>
            <h4>EARPHONES</h4>
            <h6>SHOP
            <img src={pathimage} alt="pathimage"/>
           </h6>
            </div>
          </div>
       </ScrollHeader> }


      <BgImageCont showCart={showCart}>
        <div>
            <h4>NEW PRODUCT</h4>
            <h5>XX99 Mark II HeadphoneS</h5>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <button>SEE PRODUCT</button>
        </div>
        </BgImageCont>
    </MainHeader>
    <Sections showScroll={showScroll} showCart={showCart}/>
    </FirstHeader>
  )
}

export default Header

const FirstHeader = styled.div`

`

const MainHeader = styled.div`
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
  h4{
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

const BgImageCont = styled.div`
 background-image:url(${headerbgimg});
 background-repeat:no-repeat; 
 background-size:contain;
 background-position:center center;
 width:100%;
 height:100vh;
 opacity:${(props) => props.showCart ? "0.2" : "1"};

 @media screen and (min-width: 768px) {
    background-image:url(${desktopimage});
    display:flex;
    width:84%;
    height:84vh;
    background-position:right;
    margin:20px auto;
  }
 div{
  color:white;
  text-align:center;
  padding-top:180px;
  @media screen and (min-width: 768px) {
   text-align:left;
  }
 }
 h4{
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #FFFFFF;
  opacity: 0.5;
 
 }
 h5{
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-top:20px;
  width:320px;
  margin:10px auto;
  @media screen and (min-width: 768px) {
    font-size:42px;
  line-height: 52px;
  text-align:left;
  }
 }
 p{
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.75;
  width:320px;
  margin:0 auto;
 }
 button{
  background: #D87D4A;
  width:180px;
  height:59px;
  padding:10px 15px;
  margin-top:20px;
  color:white;
  font-weight: 700;
  font-size: 15px;
  outline:none;
  border:none;
  line-height: 18px;
  cursor:pointer;
  &:hover{
    opacity:0.8;
    transition:0.35s;
  }
 }
`

const MobileImage = styled.div`
  @media screen and (min-width: 768px) {
    display:none;
  }
`