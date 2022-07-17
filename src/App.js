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
import NotFound from './Utilities/NotFound';
import Footer from './Pages/Shared-Folder/Footer';
import useSearchProduct from './hooks/useSearchProduct';
function App() {
  const { onChangeHandler, texts, suggestions } = useSearchProduct();
  return (
    <div>
      <Header onChangeHandler={onChangeHandler} texts={texts} />
      <Routes>
        <Route path="/" element={<Home suggestions={suggestions} ></Home>} />
        <Route path="/home" element={<Home suggestions={suggestions}></Home>} />
        <Route path="/products" element={<Products suggestions={suggestions} />} />
        <Route path="/products/:id" element={<ProductDetail suggestions={suggestions} />} >
          <Route path="buy-now/:id" element={<BuyNow></BuyNow>}></Route>
        </Route>
        <Route path="/about" element={<About suggestions={suggestions} />} />
        <Route path="/blogs" element={<Blogs suggestions={suggestions} />} />
        <Route path="/contact" element={<Contact suggestions={suggestions} />} />

        <Route path="/*" element={<NotFound suggestions={suggestions} />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
