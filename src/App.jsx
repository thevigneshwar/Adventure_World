import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./page/Home"
import Shop from "./page/Shop"
import Checkout from "./components/Checkout"
import { useState } from "react"
import Cart from "./page/Cart"
import Order from "./page/Order"
import FilterData from "./page/FilterData"
import ProductDetails from "./page/ProductDetails"

export function App() {
  const [order, setOrder] = useState(null)
  
  return (
   <>
   <Navbar /> 
   <Routes> 
   <Route path="/" element={<Home />}></Route>
   <Route path="/shop" element={<Shop />}></Route> 
   <Route path="/cart" element={<Cart />}></Route>
   <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}></Route>
   <Route path="/order-confirmation" element={<Order order={order}/>}></Route>
   <Route path="/filter-data" element={<FilterData/>}></Route>
   <Route path="/product/:id" element={<ProductDetails/>}></Route>
   <Route path="/cart" element={<Cart />}></Route>

     
  </Routes> 
   <Footer />  
   </>
    )
}

export default App

