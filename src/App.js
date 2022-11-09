
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {

  return (
      <Routes>
         <Route path='audiophile-ecommerce-project' element={<Header/>}/>
      </Routes>
  );
}

export default App;

