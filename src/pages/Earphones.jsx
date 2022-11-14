import React from 'react'
import styled from 'styled-components'
import FIrstContainer from '../SharedComponents/FIrstContainer'

const Earphones = ({showCart,setShowCart,showScroll,setShowScroll}) => {
  return (
    <EarphonesContainer >
      <FIrstContainer showCart={showCart} setShowCart={setShowCart} showScroll={showScroll} setShowScroll={setShowScroll}/>
        <MainEarphonesCOntainer showCart={showCart}>
          <h4>EARPHONES</h4>
        </MainEarphonesCOntainer>
    </EarphonesContainer>
  )
}

export default Earphones

const EarphonesContainer = styled.div`
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

const MainEarphonesCOntainer= styled.div`
    opacity:${(props) => props.showCart ? "0.07" : "1"};
 
`