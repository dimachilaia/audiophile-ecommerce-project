import React from 'react'
import FIrstContainer from '../SharedComponents/FIrstContainer'
import styled from 'styled-components'
import headphoneimg from '../assets/shared/desktop/image-xx99-mark-two-headphones.jpg'
import headphoneimg2 from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import headphoneimg3 from '../assets/shared/desktop/image-xx59-headphones.jpg'
import SecondContainer from '../SharedComponents/SecondContainer'
import { Link } from 'react-router-dom'


const Headphones = ({showCart,setShowCart,showScroll,setShowScroll}) => {
  return (
    <HeadphoneContainer >
    <FIrstContainer showCart={showCart} setShowCart={setShowCart} showScroll={showScroll} setShowScroll={setShowScroll}/>
      <MainHeadphoneContainer showScroll={showScroll} showCart={showCart}>
        <h4>HEADPHONES</h4>
      </MainHeadphoneContainer>

       <FirstHeaderContainer showCart={showCart} showScroll={showScroll}>
          <ChangeContainer>
            <img src={headphoneimg} alt="headimg"/>
            <ForFlexCont >
              <h3>NEW PRODUCT</h3>
              <h1>XX99 Mark II Headphones</h1>
              <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone  experience by reproducing the balanced depth and precision of studio-quality sound.</p>
              <Link to="/headphones/4">
                <button>See Product</button>
              </Link>
            </ForFlexCont>
          </ChangeContainer>
          </FirstHeaderContainer>

       <FirstHeaderContainer showCart={showCart} showScroll={showScroll}>
         <ChangeContainer>
            <img src={headphoneimg2} alt="headimg2" style={{marginTop:'90px'}}/>
             <ForFlexCont>
                <h1>XX99 Mark I Headphones</h1>
                <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                <Link to="/headphones/3">
                <button>See Product</button>
              </Link>
             </ForFlexCont>
         </ChangeContainer>
     </FirstHeaderContainer>


       <FirstHeaderContainer showCart={showCart} showScroll={showScroll}>
         <ChangeContainer>
          <img src={headphoneimg3} alt="headimg" style={{marginTop:'90px'}}/>
          <ForFlexCont >
              <h1>XX59 Headphones</h1>
              <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>

              <Link to="/headphones/2">
                <button>See Product</button>
              </Link>

          </ForFlexCont>
        </ChangeContainer>
     </FirstHeaderContainer>

      <SecondContainer showCart={showCart} showScroll={showScroll}/>
    </HeadphoneContainer>
  )
}

export default Headphones

const HeadphoneContainer = styled.div`
  h4{
    text-align:center;
    transform:translateY(-50px);
    color:white;
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`
const MainHeadphoneContainer = styled.div`
    opacity:${(props) => props.showCart ? "0.3" : '1' && props.showScroll ? '0.3' : '1'};

`

const FirstHeaderContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  margin:20px auto;
  align-items:center;
  opacity:${(props) => props.showCart ? "0.3" : '1' && props.showScroll ? '0.3' : '1'};

  img{
    width:327px;
    height:300px;
    display:flex;
    border-radius: 8px;
    margin:0 auto;
  }
  h3{
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 10px;
    text-transform: uppercase;
    color: #D87D4A;
  }
  h1{
    font-size: 28px;
    line-height: 38px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
    width:327px;
    margin-top:20px;
  }
  p{
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    width:327px;
  }
  button{
  background: #D87D4A;
  width:180px;
  height:39px;
  padding:10px 15px;
  margin-top:20px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 13px;
  outline:none;
  border:none;
  cursor:pointer;
  &:hover{
    opacity:0.8;
    transition:0.35s;
  }
 }
 @media screen and (min-width: 768px) {
   h1{
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
   }
   p{
        font-weight: 550;
        font-size: 17px;
        line-height: 25px;
        margin-top:35px;
        opacity:0.45;
   }
   button{
    font-size: 16px;
    width:200px;
    height:55px;
    border-radius:5px;
   }
}


`


// 
const ChangeContainer = styled.div`

  @media screen and (min-width: 768px) {
    display:flex;

  img{
     width:450px;
     height:500px;
    }
  }
`

const ForFlexCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  @media screen and (min-width: 1024px) {
     margin-left:25vh;
  }
`