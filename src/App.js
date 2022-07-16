import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/Pages/Shared-Folder/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import ProductDetail from './Pages/Products/ProductDetail/ProductDetail';
import BuyNow from './Pages/Products/BuyNow/BuyNow';
function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} >
          <Route path="buy-now/:id" element={<BuyNow></BuyNow>}></Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
