import {createSlice} from '@reduxjs/toolkit'

const CartSlice = createSlice({
  name:'cart',
  initialState:{
    itemsList:[],
    totalQuantity:0,
    value:0
  },
  reducers:{
    addToCart(state, action){
       const newItem = action.payload;
       const existinItem = state.itemsList.find((item)=>item.id === newItem.id);
       if(existinItem){
        state.totalQuantity ++;
        existinItem.quantity ++;
        existinItem.totalPrice += newItem.price;
       }else{
        state.itemsList.push({id:newItem.id, price:newItem.price, quantity:1, name:newItem.name, image:newItem.image});
        state.totalQuantity ++
       }
    },
    removeFromCart(state, action){
      const id = action.payload;
      const existinItem = state.itemsList.find((item)=>item.id === id)
      if(existinItem.quantity === 1){
        state.itemsList = state.itemsList.filter(item=>item.id !== id)
      }else{
        existinItem.quantity -- ;
        existinItem.totalPrice -= existinItem.price
      }
    },
    incrementHandler:(state)=>{
       state.value += 1
    },
    decrementHandler:(state)=>{
      state.value -= 1
    }
  }
})

export const {addToCart, removeFromCart} = CartSlice.actions;
export default CartSlice;
