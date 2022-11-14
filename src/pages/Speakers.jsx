import React from 'react'
import FIrstContainer from '../SharedComponents/FIrstContainer'
import styled from 'styled-components'

const Speakers = ({showCart,setShowCart,showScroll,setShowScroll}) => {
  return (
    <SpeakersContainer>
      <FIrstContainer  showCart={showCart} setShowCart={setShowCart} showScroll={showScroll} setShowScroll={setShowScroll}/>
      <MainSpeakerContainer showCart={showCart}>
        <h4>SPEAKERS</h4>
      </MainSpeakerContainer>
    </SpeakersContainer>
  )
}

export default Speakers

const SpeakersContainer = styled.div`
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
const MainSpeakerContainer= styled.div`
    opacity:${(props) => props.showCart ? "0.07" : "1"};
 
`