import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from "./layout/Layout.jsx"
import Home from "./pages/home/Home.jsx"
import Contact from "./pages/contact/Contact.jsx"
import About from "./pages/about/About.jsx"
import SignUp from "./pages/signUp/SignUp.jsx"
import Exclusive from './pages/exclusive/Exclusive.jsx'
import UserProvider from './context/context.jsx'
import Wishlist from './pages/wishlist/Wishlist.jsx'

import Category from './pages/category/Category.jsx'


function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/exclusive" element={<Exclusive />}></Route>
              <Route index element={<Home />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/signUp" element={<SignUp />}></Route>
              <Route path="/wishlist" element={<Wishlist/>}></Route>
              <Route path="/category/:name" element={<Category />}></Route>
              <Route path="/view/:productId" element={""}></Route>
            </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App
