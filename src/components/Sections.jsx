import React from 'react'
import styled from 'styled-components'
import headphoneimage from '../assets/headphone.png'
import speakerimage from '../assets/fi.svg'
import earphonesimage from '../assets/fo.svg'
import pathimage from '../assets/Path 2.svg'


const Sections = () => {
  return (
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
  )
}

export default Sections

const Section = styled.div`
 @media screen and (min-width: 768px) {
    display:flex;
    justify-content:space-around;
    gap:30px;
  }
`

const FirstSectContainer = styled.div`
text-align:center;
background-color:#F1F1F1;
  position:relative;
  width:327px;
  height:160px;
  border-radius:10px;
  margin:50px auto;
  @media screen and (min-width: 768px) {
   width:223px;
  }
  @media screen and (min-width: 1024px) {
    width:350px;
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