import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import menbanner  from './Components/Assets/mens.jpg'
import womenbanner from './Components/Assets/womenba.jpg'
import kidsbanner from './Components/Assets/kidsb.jpg'
import salebanner from './Components/Assets/sale-removebg-preview.png'
import Offers, { offerproduct } from './Components/Offers/Offers';
import { useContext } from 'react';
import { ShopContext } from './Context/Context';
function App() {
  const {itemdata}=useContext(ShopContext);
  const {offerdata}=useContext(ShopContext);
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/mens' element={<Category product={itemdata} banner={menbanner} cat="fashion-men"/>}></Route>
              <Route path='/woman' element={<Category product={itemdata} banner={womenbanner} cat="fashion-women/"/> }></Route>
              <Route path='/kid' element={<Category product={itemdata} banner={kidsbanner} cat="fashion-kids"/>}></Route>
              <Route path='/product/:productId' element={<Product/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/offers' element={<Category product={offerdata} banner={salebanner} cat="fashion-men"/>}></Route>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
