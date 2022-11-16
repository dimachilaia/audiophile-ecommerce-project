// shared component where we use another components. (lastsection, footer)


import React from 'react'
import styled from 'styled-components'
import earphonesimage from '../assets/fo.svg'
import { Link, NavLink } from 'react-router-dom'
import pathimage from '../assets/Path 2.svg'
import headphoneimage from '../assets/headphone.png'
import speakerimage from '../assets/fi.svg'
import personimage from '../assets/shared/mobile/image-best-gear.jpg'
import personimage2 from '../assets/shared/desktop/image-best-gear.jpg'
import fbicon from '../assets/fbicon.svg'
import audioimg from '../assets/audiophile.svg'
import twittericon from '../assets/twitter.svg'
import instaicon from '../assets/Shape.svg'

const SecondContainer = ({showScroll, showCart}) => {
  return (
    <MainSectionContainer showScroll={showScroll} showCart={showCart}>
      <Section>
      <FirstSectContainer>
        <Img src={headphoneimage} alt="headphone"/>
      <HeadphonesInfo>
        <h5>HEADPHONES</h5>
         <Link to="/headphones" style={{textDecoration:'none', color:'#000000', fontSize:'13px', opacity:0.5}}>SHOP
         <img src={pathimage} alt="pathimage"/>
        </Link>
     </HeadphonesInfo>
   </FirstSectContainer>

    <FirstSectContainer>
     <Img src={speakerimage} alt="headphone"/>
       <HeadphonesInfo>
        <h5>SPEAKERS</h5>
        <Link to="/speakers" style={{textDecoration:'none', color:'#000000', fontSize:'13px', opacity:'0.5'}}>SHOP
        <img src={pathimage} alt="pathimage"/>
        </Link>
      </HeadphonesInfo>
    </FirstSectContainer>

     <FirstSectContainer>
       <Img src={earphonesimage} alt="headphone"/>
       <HeadphonesInfo>
        <h5>EARPHONES</h5>
        <Link to="/earphones" style={{textDecoration:'none', color:'#000000', fontSize:'13px', opacity:'0.5'}}>SHOP
        <img src={pathimage} alt="pathimage"/>
       </Link>
      </HeadphonesInfo>
      </FirstSectContainer>
    </Section>

      <LastSection>
         <MobileImage>
          <img src={personimage} alt="personimage"/>
         </MobileImage>
       <DesktopImage>
          <img src={personimage2} alt="personimage"/>
       </DesktopImage>
      <LastSecTexts>
          <h5>Bringing you the <span>best</span> audio gear</h5>
          <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
         </LastSecTexts>
        </LastSection>

        <Footer>
           <FooterDiv>
            <Line></Line>
              <img src={audioimg} alt="audioimage"/>

              <NavLink to="/" style={{color:'white', textDecoration:'none'}}>
              <h3>Home</h3>
           </NavLink>

           <NavLink to="/headphones" style={{color:'white', textDecoration:'none'}}>
            <h3>HEADPHONES</h3>
           </NavLink>

           <NavLink to="/speakers" style={{color:'white', textDecoration:'none'}}>
             <h3>SPEAKERS</h3>
           </NavLink>
           
           <NavLink to="/earphones" style={{color:'white', textDecoration:'none'}}>
             <h3>EARPHONES</h3>
           </NavLink>
            
           </FooterDiv> 
            <SecFooterDiv>
            <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <h6>&copy; Copyright 2023. All Rights Reserved</h6>
            </SecFooterDiv>

            <Icons>
              <img src={fbicon} alt="fbicon"/>
              <img src={twittericon} alt="twicon"/>
              <img src={instaicon} alt="twicon"/>
            </Icons>
         </Footer>
      </MainSectionContainer>
  )
}

export default SecondContainer

const MainSectionContainer = styled.div`
   opacity:${(props) => props.showScroll ? "0.3" : "1" && props.showCart ? "0.3" : '1'};
   
`

const Section = styled.div`
  margin-top:105px;
 @media screen and (min-width: 768px) {
    display:flex;
 }
`

const FirstSectContainer = styled.div`
text-align:center;
background-color:#F1F1F1;
  position:relative;
  width:327px;
  height:160px;
  border-radius:10px;
  margin:45px auto;

  @media screen and (min-width: 768px) {
    width:250px;
    margin:33px auto;
  }

`
const Img = styled.img`
 position:absolute;
    top:-45px;
    transform:translateX(-5vh);
`
const HeadphonesInfo = styled.div`
  padding:80px 8px;
  h5{
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 1.07143px;
    text-transform: uppercase;
    color: #000000;
  }
  h4{
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
    mix-blend-mode: normal;
    margin-top:10px;
    opacity: 0.5;
    cursor:pointer;
    &:hover{
      opacity:0.7;
    }
  }
  img{
    margin-left:10px;
  }
`

const LastSection = styled.div`
     @media screen and (min-width: 1024px) {
      display:flex;
  }
`

const MobileImage = styled.div`
   img{
    margin:0 auto;
    display:flex;
    width:327px;
    height:300px;
  }
  @media screen and (min-width: 768px) {
     display:none;
  }
`
const DesktopImage = styled.div`
  display:none;
  @media screen and (min-width: 768px) {
    margin:0 auto;
    display:flex;
    width:500px;
  }
`
const LastSecTexts = styled.div`
  text-align:center;
  margin-top:20px;
  margin:103px auto;
  width:327px;
  h5{
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
    @media screen and (min-width: 768px) {
        font-size: 40px;
      line-height: 44px;
      text-align:left;
  }
  @media screen and (min-width: 768px) {
     span{
      color:#D87D4A;
     }
  }
}
  p{
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      text-align:left;
      margin-top:35px;
  }

 
}
`

const Footer = styled.div`
    background: #101010;
    color:white;
    flex-direction:column;
    display:flex;
    align-items:center;
    text-align:center;
    margin-top:20px;
    @media screen and (min-width: 768px) {
    align-items:center;
  }
`

const FooterDiv = styled.div`
   @media screen and (min-width: 768px) {
    display:flex;
    gap:50px;
    align-items:center;
  }
   hr{
    background-color:red;
    color:red;
   }
   img{
    margin-top:35px;
   }
   h3{
    font-size:16px;
    padding-top:25px;
    :hover{
      cursor:pointer;
      color:#D87D4A;
      transition: 0.32s;
    }
   }
`
const SecFooterDiv = styled.div`
  margin-top:25px;
  padding:10px 20px;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;

  h6{
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    margin-top:25px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
  @media screen and (min-width: 768px) {
    p{
      width:640px;
    }
  }
 
`

const Line = styled.div`
  background-color:#D87D4A;
  height:3px;
`

const Icons = styled.div`
  display:flex;
  img{
    padding:10px 20px;
    cursor:pointer;
    &:hover{
      background-color:#D87D4A;
      transition:0.32s;
      border-radius:15px;
    }
  }
`