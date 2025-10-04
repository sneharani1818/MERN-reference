import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    // <BrowserRouter >

    < Routes >
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </ Routes>
    // </BrowserRouter>
  )
}

export default App
