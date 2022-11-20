import { useParams } from "react-router-dom"
import FIrstContainer from "../SharedComponents/FIrstContainer"
import SecondContainer from "../SharedComponents/SecondContainer"
import data from '../data.json'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addToCart } from "../redux/CartSlice"

const Products = ({showCart,setShowCart, showScroll, setShowScroll}) => {
    const {useid} = useParams()
    const filteredData = data.find((item)=> +item.id === +useid)
    const category = filteredData.category[0].toUpperCase() + filteredData.category.slice(1);
    const [itemNumber, setItemNumber] = useState(1)
    const dispatch = useDispatch();
    const {name, price, id, image} = filteredData;

    const incrementHandler = ()=>{
      setItemNumber(itemNumber + 1 )
    }
    const decrementHandler = ()=>{
      if(itemNumber > 1){
       setItemNumber(itemNumber - 1)
      }
    }

  return (
    <MainCOntainer >
    <FIrstContainer showCart={showCart} setShowCart={setShowCart} showScroll={showScroll} setShowScroll={setShowScroll}/>
        <p>Go Back</p>

        <Wrapper showCart={showCart} showScroll={showScroll}>
         <MainWrapper>
        <ImgContainer>
          <img src={process.env.PUBLIC_URL + filteredData.image.desktop} alt={filteredData.name} />
        </ImgContainer>

          <Container>

          <h4>NEW PRODUCT</h4>
          <h6>{filteredData.slug}</h6>
          <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <h3>$ {filteredData.price}</h3>
           <AddToCartInfo>
               <span onClick={decrementHandler}>-</span>
               <h4>{itemNumber}</h4>
               <span onClick={incrementHandler}>+</span>
            </AddToCartInfo>
            <button onClick={()=>dispatch(addToCart({name, price, id, image}))}>ADD TO CART</button>
          </Container>
          </MainWrapper>
        </Wrapper>


        <InfoDiv showCart={showCart} showScroll={showScroll}>
        <FeaturesDiv>
         <h1>FEATURES</h1>
         <p>Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).</p>

         <p style={{marginTop:'20px'}}>Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.</p>
        </FeaturesDiv>

        <BoxDiv>
        <h1>IN THE BOX</h1>
        {filteredData.includes.map((item, index)=>{
            return <MappedBox key={index}>
             <h3>{item.quantity}x</h3>
             <h4>{item.item}</h4>
            </MappedBox>
          })}
        </BoxDiv>

        </InfoDiv>

        <ContainerImages>
          <FirstTwoIMage>
           <img src={process.env.PUBLIC_URL + filteredData.gallery.first.mobile} alt={filteredData.name} />
           <img src={process.env.PUBLIC_URL + filteredData.gallery.second.mobile} alt={filteredData.name} />
          </FirstTwoIMage>
          <img src={process.env.PUBLIC_URL + filteredData.gallery.third.mobile} alt={filteredData.name}/>
        </ContainerImages>
          
        <MayLike showScroll={showScroll} showCart={showCart}>
        <h3>YOU MAY ALSO LIKE</h3>
        <FilterMap>
          {filteredData.others.map((item, index)=>{
            const itemId = data.find(product => product.slug === item.slug).id;

            return (
               <MappedDiv key={index}>
              <img src={process.env.PUBLIC_URL + item.image.mobile} alt={item.name} />
              <h5>{item.name}</h5>
              <Link to={`/${category}/${itemId}`}>
                <button>SEE PRODUCT</button>
              </Link>
            </MappedDiv>)
          })}
          </FilterMap>
          </MayLike>
            
      <SecondContainer showCart={showCart} showScroll={showScroll}/>
    </MainCOntainer>
  )
}

export default Products

const MainCOntainer = styled.div`
 
`
const Wrapper = styled.div`
     display:flex;
    padding:10px 20px;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    opacity:${(props) => props.showCart ? "0.3" : '1' && props.showScroll ? '0.3' : '1'};
 
`
const MainWrapper = styled.div`
   img{
    width:328px;
    display:flex;
    margin:0 auto;
    border-radius:10px;
  }

   @media screen and (min-width: 768px) {
      display:flex;
      justify-content:center;
      gap:60px;
      img{
        width:500px;
      }
}
`
const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (min-width: 768px) {
     width:32%;
}

  h4{
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 10px;
    text-transform: uppercase;
    color: #D87D4A;
    text-align:center;
    @media screen and (min-width: 768px) {
    font-size:17px;
   }
  } 
  h6{
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
    text-align:center;
    margin-top:25px;
    @media screen and (min-width: 768px) {
    }
  }
  p{
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-top:20px;
    text-align:center;
    @media screen and (min-width: 768px) {
    font-size:20px;
  }
}
  
  h3{
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #000000;
    text-align:center;
    font-size:30px;
    margin-top:10px;
  }
 
  button{
    background: #D87D4A;
    width:210px;
    height:55px;
    outline:none;
    border:none;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor:pointer;
    margin-top:10px;
    margin:7px auto;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    &:hover{
      opacity:0.76;
      transition: 0.33s;
    }
  }

`

const ImgContainer = styled.div`
 
`

const AddToCartInfo = styled.div`
    background: #F1F1F1;
    width:120px;
    height:48px;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:30px;
    color:#000000;
    margin:15px auto;

  h4{
    color:#000000;
    padding-left:3px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  span{
    color: #000000;
    opacity:0.33;
    cursor:pointer;

  }
`

const FeaturesDiv = styled.div`
  display:flex;
  margin:15px auto;
  flex-direction:column;
  width:330px;
  text-align:start;
  @media screen and (min-width: 768px) {
     width:46%;
}
  
  p{
    font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  text-align:start;
  }
`
const InfoDiv = styled.div`
    opacity:${(props) => props.showCart ? "0.3" : '1' && props.showScroll ? '0.3' : '1'};

   @media screen and (min-width: 768px) {
      display:flex;
      justify-content:space-between;
}
`

const BoxDiv = styled.div`
    margin-top:70px;
    padding:10px 20px;
    text-align:start;
    @media screen and (min-width: 1300px) {
      transform:translateX(-25vh);
  }
    h1{
      display:flex;
      justify-content:center;
      @media screen and (min-width: 768px) {
      justify-content:start;
      
  }
}
`

const MappedBox = styled.div`
 display:flex;
 gap:20px;
 width:300px;
 margin:0 auto;
 h3{
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #D87D4A
 }
 h4{
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
 }
`
const ContainerImages = styled.div`
 display:flex;
 flex-direction:column;
 gap:10px;

 @media screen and (min-width: 768px) {
  flex-direction:row;
  justify-content:space-evenly;
  }
 img{
  margin:0 auto;
  display:flex;
  padding-top:20px;
  width:280px;
  @media screen and (min-width: 768px) {
    margin:10px 10px;
    width:366px;
  }
 }
`
const FirstTwoIMage = styled.div`
 
`
const MayLike = styled.div`
    opacity:${(props) => props.showCart ? "0.3" : '1' && props.showScroll ? '0.3' : '1'};
    h3{
      font-size: 24px;
      line-height: 36px;
      text-align: center;
      letter-spacing: 0.857143px;
      text-transform: uppercase;
      color: #000000;
      margin-top:35px;
      margin-bottom:35px;
    }
  
`

const FilterMap = styled.div`
   @media screen and (min-width: 1024px) {
    display:flex;
    justify-content:space-evenly;
  }
`
const MappedDiv = styled.div`
    text-align:center;
    
    img{
      width:300px;
      border-radius:10px;
      @media screen and (min-width: 768px) {
      height:220px;
      width:60%;
  }
  @media screen and (min-width: 1024px) {
      width:84%;
      height:260px;
  }
    }
   
    h5{
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      letter-spacing: 1.71429px;
      text-transform: uppercase;
      color: #000000;
    }
    button{
    background: #D87D4A;
    width:150px;
    height:55px;
    outline:none;
    border:none;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor:pointer;
    margin-bottom:60px;
    margin-top:10px;
    border-radius:5px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    &:hover{
      opacity:0.76;
      transition: 0.33s;
    }
  }
`