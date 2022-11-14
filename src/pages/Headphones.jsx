import React from 'react'
import FIrstContainer from '../SharedComponents/FIrstContainer'
import styled from 'styled-components'

const Headphones = ({showCart,setShowCart,showScroll,setShowScroll}) => {

  
  return (
    <HeadphoneContainer >
     <FIrstContainer showCart={showCart} setShowCart={setShowCart} showScroll={showScroll} setShowScroll={setShowScroll} />
     <MainHeadphoneContainer showCart={showCart}>
      <h4>HEADPHONES</h4>
     </MainHeadphoneContainer>
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
    opacity:${(props) => props.showCart ? "0.07" : "1"};
`