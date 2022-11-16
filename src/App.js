
import {Fragment, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Earphones from './pages/Earphones';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';

function App() {

  const [showScroll, setShowScroll] = useState(false)
  const [showCart, setShowCart] = useState(false)

  return (
    <Fragment>
     <Routes>
       <Route path='/' element={<Header/>}/>
       <Route path='/headphones' element={<Headphones showCart={showCart} setShowCart={setShowCart} showScroll={showScroll} setShowScroll={setShowScroll} />}/>

       <Route path='/speakers' element={<Speakers showCart={showCart} setShowCart={setShowCart} showScroll={showScroll} setShowScroll={setShowScroll}/>} />

       <Route path='/earphones' element={<Earphones showCart={showCart} setShowCart={setShowCart} showScroll={showScroll} setShowScroll={setShowScroll}/>} />
       
     </Routes>
    </Fragment>
  );
}

export default App;