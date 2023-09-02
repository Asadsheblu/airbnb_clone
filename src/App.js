
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar';
import ProductUpload from './Components/Admin/ProductUpload';
import Products from './Components/Products/Products';
import Category from './Components/Products/Category';


function App() {
  return (
    <div>
     <Navbar/>

      <Routes>
        <Route path='/' element={<Category/>}></Route>
        <Route path='/uploadproduct' element={<ProductUpload/>} ></Route>
      </Routes>
     
    </div>
  );
}

export default App;
