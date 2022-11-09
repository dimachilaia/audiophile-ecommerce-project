import styled from "styled-components"
import smallimage from '../assets/Group 22.svg'

const SmallCart = () => {    
  return (
    <Cart>
        <div>
         <h4>CART (4)</h4>
         <h5>Remove all</h5>
        </div>
        
        <SecondCart>
        <Info>
            <img src={smallimage} alt="small"/>
          <StaticInfo>
           <h4>XX99 MK II</h4>
           <h6>$ 2,999</h6>
          </StaticInfo>
        </Info>
        <NumbersCart>
                <h3>-</h3>
                <h3>1</h3>
                <h3>+</h3>
        </NumbersCart>
      </SecondCart>
      

      <SecondCart>
      <Info>
          <img src={smallimage} alt="small"/>
        <StaticInfo>
         <h4>XX99 MK II</h4>
         <h6>$ 2,999</h6>
        </StaticInfo>
      </Info>
      <NumbersCart>
              <h3>-</h3>
              <h3>1</h3>
              <h3>+</h3>
      </NumbersCart>
    </SecondCart>

        <Total>
            <h3>TOTAL</h3>
            <h4>$ 5,396</h4>
        </Total>
             <Button>checkout</Button>
    </Cart>
   
  )
}

export default SmallCart

const Cart = styled.div`
   position:absolute;
   height:auto;
   width:calc(100% - 48px);
   z-index:2;
   margin: 45px 20px;
   background-color:white;
   border-radius:10px;
 div{
   display:flex;
   align-items:center;
   justify-content:space-around;
   transform:translateY(40px);
}
 h4{
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #000000;
}
 
 h5{
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    text-decoration-line: underline;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
 }
`

const SecondCart = styled.div`
`
const Info = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
 h6{
    padding-bottom:50px;
    font-size: 14px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
 }
`
const StaticInfo = styled.div`
 display:flex;
 flex-direction:column;
 margin-bottom:20px;
`

const NumbersCart = styled.div`
  background-color:#F1F1F1;
  width:96px;
  height:32px;
`
const Total= styled.div`
  margin-top:40px;
  display:flex;
  gap:50px;
  justify-content:space-between;
  h3{
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
 
`
const Button= styled.button`
 background-color:#D87D4A;
 width:350px;
 height:48px;
 text-decoration:none;
 border:none;
 color:white;
 text-align: center;
 letter-spacing: 1px;
 align-items:center;
 margin:50px auto;
 display:flex;
 justify-content:center;
 align-items:center;
 text-transform: uppercase;
 color: #FFFFFF;
 border-radius:4px;
 cursor:pointer;
 &:hover{
    opacity:0.7;
    transition:.35s;
 }
`