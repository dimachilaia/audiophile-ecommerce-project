import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { decrementHandler, incrementHandler } from "../redux/CartSlice";

const SmallCart = () => {
  const cart = useSelector((state) => state.cart.itemsList);
  // const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)
  const totalPrice = useSelector((state)=>state.cart.totalPrice)
  const dispatch = useDispatch()    
  // const value = useSelector((state)=>state.cart.value);
  const totalQuantity = useSelector((state)=>state.cart.totalQuantity);
  
  const getTotal = () => {
    let totalPrice = 0
    cart.forEach(item => {
      // totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }


  return (
    cart.length >= 1 ?  <Cart>
      <div>
        <span>CART: {totalQuantity}</span>
        <h5>Remove all</h5>
      </div>

      <SecondCart>
      {cart.map((item)=>{
        const {id} = item;
        
          return <Info key={item.id}>
          <div>
          <img src={process.env.PUBLIC_URL + item.image.mobile} alt={item.name} />
            <StaticInfo>
            <span>{item.name.slice(0, 3)}</span>
            <h6>{item.price}</h6>
            </StaticInfo>
          </div>
          
          <NumbersCart>
            <h3 style={{cursor:'pointer'}} onClick={()=>dispatch(decrementHandler({id}))}>-</h3>
            <h3>{totalQuantity}</h3>
            <h3 style={{cursor:'pointer'}} onClick={()=>dispatch(incrementHandler())}>+</h3> 
        </NumbersCart>
        </Info>
        })}
      </SecondCart>

      <Total>
        <h3>TOTAL</h3>
        <h4>{getTotal().totalPrice}</h4>
      </Total>
      <Link to="/checkout" style={{textDecoration:'none'}}>
        <Button>checkout</Button>
      </Link>
    </Cart> : 
    
    <Cart>
      <div>
        <span>CART</span>
        <h5>Remove all</h5>
      </div>
        
      <EmptyCard>
        <p>CART IS EMPTY</p>
      </EmptyCard>
      
      <Total>
        <h3>TOTAL</h3>
        <h4>{totalPrice}</h4>
      </Total>
      <Link to="/checkout" style={{textDecoration:'none'}}>
        <Button disabled>checkout</Button>
      </Link>
    </Cart> 
  );
};

export default SmallCart;

const Cart = styled.div`
  position: absolute;
  height: auto;
  width: calc(100% - 48px);
  z-index: 2;
  margin: 45px 20px;
  background-color: white;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 400px;
    right: 75px;
  }

  div {
    display: flex;
    justify-content: space-around;
    transform: translateY(25px);
    align-items:center;
  }
  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #000000;
  }

  h5 {
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    text-decoration-line: underline;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;

const SecondCart = styled.div`
display:flex;
flex-direction:column;
`;
const Info = styled.div`
width:380px;
  h6 {
    padding-bottom: 50px;
    font-size: 14px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
  img{
    width:75px;
    border-radius:10px;
  };
`;
const StaticInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left:15px;
`;

const NumbersCart = styled.div`
  background-color: #f1f1f1;
  width: 96px;
  height: 32px;
`;
const Total = styled.div`
  margin-top: 55px;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  h3 {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
`;
const Button = styled.button`
  background-color: #d87d4a;
  width: 80%;
  height: 48px;
  text-decoration: none;
  border: none;
  color: white;
  text-align: center;
  letter-spacing: 1px;
  align-items: center;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  color: #ffffff;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transition: 0.35s;
  }
`;

const EmptyCard = styled.div`
   p{
    text-align:center;
    transform:translateY(35px);
    font-size:18px;
    opacity:0.6;
   }
`