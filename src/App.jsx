
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import Cart from './components/cart/Cart';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:categoryId' element={<ItemListContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
