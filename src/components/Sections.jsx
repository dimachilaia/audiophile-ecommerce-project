//Mobile Burger Menu

import React from 'react'
import styled from 'styled-components'
import headphoneimage from '../assets/headphone.png'
import speakerimage from '../assets/fi.svg'
import earphonesimage from '../assets/fo.svg'
import pathimage from '../assets/Path 2.svg'
import firstsectionimage from '../assets/sectionimag.svg'
import tableimage from '../assets/image-speaker-zx7.173a4cb5c7acfc7f300c.jpg'
import sectimage from '../assets/home/desktop/image-earphones-yx1.jpg'
import personimage from '../assets/shared/mobile/image-best-gear.jpg'
import personimage2 from '../assets/shared/desktop/image-best-gear.jpg'
import audioimg from '../assets/audiophile.svg'
import fbicon from '../assets/fbicon.svg'
import twittericon from '../assets/twitter.svg'
import instaicon from '../assets/Shape.svg'

const Sections = ({showScroll, showCart}) => {
  return (
    <MainSection showScroll={showScroll} showCart={showCart}>
    <div>
     <MainSectionDiv>
    <Section>
      <FirstSectContainer>
        <Img src={headphoneimage} alt="headphone"/>
        <HeadphonesInfo>
          <h5>HEADPHONES</h5>
          <h4>Shop
          <img src={pathimage} alt="pathimage"/>
          </h4>
        </HeadphonesInfo>
      </FirstSectContainer>

      <FirstSectContainer>
      <Img src={speakerimage} alt="headphone"/>
      <HeadphonesInfo>
        <h5>HEADPHONES</h5>
        <h4>Shop
        <img src={pathimage} alt="pathimage"/>
        </h4>
      </HeadphonesInfo>
    </FirstSectContainer>

    <FirstSectContainer>
    <Img src={earphonesimage} alt="headphone"/>
    <HeadphonesInfo>
      <h5>HEADPHONES</h5>
      <h4>Shop
       <img src={pathimage} alt="pathimage"/>
      </h4>
    </HeadphonesInfo>
   </FirstSectContainer>
  </Section>

  <SecondSectionsContainer>
  <div>
     <ForImage>
        <img src={firstsectionimage} alt="firstimg"/>
     </ForImage>
     <SectionTexts>
      <h4>ZX9 SPEAKER</h4>
      <p>Upgrade to premium speakers Upgrade to premium speakers t Upgrade to premium speakers tthat are phenomenally built to deliver truly remarkable sound.</p>
      <button>SEE PRODUCT</button>
     </SectionTexts>
     </div>
     </SecondSectionsContainer>
     
     <SpeakerCont>
      <div>
        <h4>ZX7 SPEAKER</h4>
        <button>SEE PRODUCT</button>
      </div>
    </SpeakerCont>

      <FlexedSection>
        <img src={sectimage} alt="tableimg"/>

         <div>
           <h5>YX1 EARPHONES</h5>
           <button>See Product</button>
        </div>
      </FlexedSection>

      <LastSection>
         <MobileImage>
           <img src={personimage} alt="personimage"/>
         </MobileImage>
         <DesktopImage>
           <img src={personimage2} alt="personimage"/>
         </DesktopImage>
         <LastSecTexts>
              <h4>Bringing you the <span>best</span> audio gear</h4>
              <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
           </LastSecTexts>
          </LastSection>
         </MainSectionDiv>

         <Footer>
           <FooterDiv>
            <Line></Line>
              <img src={audioimg} alt="audioimage"/>
               <h4>Home</h4>
               <h4>HEADPHONES</h4>
               <h4>SPEAKERS</h4>
               <h4>EARPHONES</h4>
           </FooterDiv> 
            <SecFooterDiv>
            <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <h4>&copy; Copyright 2023. All Rights Reserved</h4>
            </SecFooterDiv>

            <Icons>
              <img src={fbicon} alt="fbicon"/>
              <img src={twittericon} alt="twicon"/>
              <img src={instaicon} alt="twicon"/>
            </Icons>
         </Footer>
         </div>
    </MainSection>
  )
}

export default Sections

const MainSection = styled.div`
    opacity:${(props) => props.showScroll ? "0.07" : "1"};
    display:${(props) => props.showCart && "none"};
    
  /* @media screen and (min-width: 768px) {
    opacity:1;
 } */
`
const MainSectionDiv = styled.div`
  @media screen and (min-width: 1024px) {
    padding:60px 60px;
  }
`
const Section = styled.div`
 @media screen and (min-width: 1024px) {
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

  @media screen and (min-width: 1024px) {
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
const SecondSectionsContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  background: #D87D4A;
  border-radius: 8px;
  width:327px;
  padding-top:25px;
  margin:0 auto;
  @media screen and (min-width: 1024px) {
    width:82%;
    div{
      display:flex;
      justify-content:space-around;
      gap:30px;
    }
  }
  
`

const SectionTexts = styled.div`
  text-align:center;
  padding-top:55px;
  height:350px;
  @media screen and (min-width: 1024px) {
    display:flex;
    flex-direction:column;
    align-items:center;
    height:500px;
  }
  h4{
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #FFFFFF;
    @media screen and (min-width: 1024px) {
     font-size:64px;
  }
  }
  p{
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.75;
    padding-top:10px;
    @media screen and (min-width: 1024px) {
      width:52%;
  }
  }
  button{
    @media screen and (min-width: 1024px) {
      width:50%;
      padding:30px 35px;
      margin-top:-40px;
      font-size:18px;
    transition: all 0.2s ease-in-out 0s;
  }
    background: #000000;
    padding:10px 20px;
    font-size: 13px;
    border-radius:4px;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #FFFFFF;
    border:none;
    cursor:pointer;
    margin-top:30px;
    &:hover{
      opacity:0.65;
    }
  }
`

const ForImage = styled.div`
 img{
  display:flex;
  margin:0 auto;
 }
 @media screen and (min-width: 1024px) {
  width:450px;
  height:450px;
  transform:translate(12vh, 7vh);
  }
`

const SpeakerCont = styled.div`
  background-image:url(${tableimage});
  background-repeat:no-repeat;
  background-size:cover;
  background-size:88%;
  background-position:center;
  border-radius:10px;
  margin-top:30px;
  div{
    display:flex;
    flex-direction:column;
    align-items:center;
    width:280px;
  }
  h4{
    font-weight: 700;
    font-size: 12px;
    line-height: 38px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #000000;
    margin-top:20px;
    @media screen and (min-width: 768px) {
      font-size:24px;
      text-align:center;
    }
  }
  button{
    background-color: transparent;
    color: rgb(0, 0, 0);
    border-color: rgb(0, 0, 0);
    cursor: pointer;
    font-size: 13px;
    letter-spacing: 2px;
    width:120px;
    margin-top:25px;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out 0s;
    cursor:pointer;
    &:hover{
      background-color:black;
      color:white;
    }
    @media screen and (min-width: 768px) {
      width:225px;
      padding:10px 20px;
  }
  }
  @media screen and (min-width: 768px) {
    background-size:600px;
    height:40vh;
    div{
      padding:50px 290px;
    }
  }
  @media screen and (min-width: 768px) {
    background-size:82%;
  }
`
const FlexedSection = styled.div`
    @media screen and (min-width: 768px) {
      display:flex;
   }
  img{
    margin:30px auto;
    display:flex;
    width:327px;
    @media screen and (min-width: 768px) {
      width:35%;
      height:320px;
   }
  }
  div{
    display:flex;
    flex-direction:column;
    margin:20px auto;
    align-items:center;
    background: #F1F1F1;
    border-radius: 8px;
    height:200px;
    width:327px;
    justify-content:center;
    @media screen and (min-width: 768px) {
      width:28%;
      height:320px;
   }
 }
  h5{
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #000000;
  }
  button{
    background-color: transparent;
    color: rgb(0, 0, 0);
    border-color: rgb(0, 0, 0);
    cursor: pointer;
    padding: 11px 22px;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top:20px;
    transition: all 0.2s ease-in-out 0s;
    cursor:pointer;
    &:hover{
      background-color:black;
      color:white;
    }
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
  h4{
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
   h4{
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

  h4{
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