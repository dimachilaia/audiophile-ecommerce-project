
import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {

  return (
    <Fragment>
     <Routes>
       <Route path='audiophile-ecommerce-project' element={<Header/>}/>
     </Routes>
    </Fragment>
  );
}

export default App;