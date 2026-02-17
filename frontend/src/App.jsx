import {Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home.jsx';
import Product from './pages/ProductPage/Product.jsx'
function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
    </div>
  )
}

export default App
