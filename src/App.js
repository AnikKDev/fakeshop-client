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
import { useEffect, useState } from 'react';
function App() {
  // declaring auto suggestions with search
  const [products, setProducts] = useState([]);
  const [texts, setTexts] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = products.filter(product => {
        const regEx = new RegExp(`${text}`, "gi");
        return product.title.match(regEx);
      })
    }
    // console.log(matches)
    setSuggestions(matches)
    setTexts(text);

  };
  return (
    <div>
      <Header onChangeHandler={onChangeHandler} texts={texts} />
      <Routes>
        <Route path="/" element={<Home suggestions={suggestions} products={products}></Home>} />
        <Route path="/home" element={<Home suggestions={suggestions} products={products}></Home>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} >
          <Route path="buy-now/:id" element={<BuyNow></BuyNow>}></Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/*" element={<NotFound />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
