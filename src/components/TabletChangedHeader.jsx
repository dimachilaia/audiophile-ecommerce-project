import React from 'react'
import styled from 'styled-components'

const TabletChangedHeader = () => {
  return (
    <TabletHeader>
        <h4>HOME</h4>
        <h4>HEADPHONES</h4>
        <h4>SPEAKERS</h4>
        <h4>EARPHONES</h4>
    </TabletHeader>
  )
}

export default TabletChangedHeader

const TabletHeader = styled.div`
display:none;
@media screen and (min-width: 768px) {
    display:flex;
    color:white;
    gap:20px;
    font-weight: 700;
    font-size: 13px;
    line-height: 25px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFFFFF;
    h4:hover{
        color:#D87D4A;
        cursor:pointer;
        transition: 0.4s;
    }
  }
  @media screen and (min-width: 1024px) {
    gap:60px;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`
