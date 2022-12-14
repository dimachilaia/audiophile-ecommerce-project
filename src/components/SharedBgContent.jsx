import React from 'react'
import styled from 'styled-components'
import headerbgimg from '../assets/home/mobile/image-header.jpg'
import desktopimage from '../assets/home/desktop/image-hero.jpg'

const SharedBgContent = ({showCart}) => {
  return (
    <BgImageCont showCart={showCart}>
        <div>
            <h4>NEW PRODUCT</h4>
            <h5>XX99 Mark II HeadphoneS</h5>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <button>SEE PRODUCT</button>
        </div>
        </BgImageCont>
  )
}

export default SharedBgContent

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