
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import Cart from './components/cart/Cart';
import CartProvider from './context/CartContext';
 

function App() {
  return (
  <>  
    <BrowserRouter>
      <CartProvider>
        <NavBar />
       
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
         </Routes>
        
      </CartProvider>
    </BrowserRouter>
  </>  
  );
}

export default App;
