// Desktop Header

import React from 'react'
import {  NavLink } from 'react-router-dom'
import styled from 'styled-components'

const TabletChangedHeader = () => {

  return (
    <TabletHeader>
          <NavLink to="/audiophile-ecommerce-project" style={({isActive})=>{
            // return {color:isActive ? '#D87D4A' : 'white', textDecoration:'none'}
          }}>HOME</NavLink>
          <NavLink to="/audiophile-ecommerce-project/headphones" style={({isActive})=>{
            return {color:isActive ? '#D87D4A' : 'white', textDecoration:'none'}
          }}>HEADPHONES</NavLink>
          <NavLink to="/audiophile-ecommerce-project/speakers" style={({isActive})=>{
            return {color:isActive ? '#D87D4A' : 'white', textDecoration:'none'}
          }}>SPEAKERS</NavLink>
          <NavLink to="/audiophile-ecommerce-project/earphones" style={({isActive})=>{
            return {color:isActive ? '#D87D4A' : 'white', textDecoration:'none'}
          }}>EARPHONES</NavLink>
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
    Link:hover{
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

const StyledLink = styled(NavLink)`
 outline:none;
`