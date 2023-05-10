import { useEffect, useReducer, useState } from 'react'
import {  Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer/Footer';
import Home from './Home';
import ProductDetails from './Productdetails/ProductDetails';
import Products from './Product/Products';
import ToCart from './cart/ToCart';
import Login from './login/Login';
import { Context } from './Utils/Context';
import Admin from './Admin Page/Admin';
import Users from './Admin Page/Users';
import ViewProducts from './Admin Page/ViewProducts';
import AddProducts from './Admin Page/AddProducts';
import { proData } from './Product/ProductsData';
import EditProducts from './Admin Page/EditProducts';
import Signup from './login/Signup';
import AdminLogin from './Admin Page/AdminLogin';
import Boy from './Catogories/Boy'
import Girl from './Catogories/Girl'
import Accesories from './Catogories/Accesories'
import Shoe from './Catogories/Shoe'
import Toy from './Catogories/Toy'


const reduce = (count, action) => {
  switch (action.type) {
    case 'count':
      return {
        ...count,
        value: count.value + action.payload
      }
      break;

    default:
      break;
  }

}

function App() {

  const [products,setProducts] = useState(proData) 
  const [editData,setEditData] = useState([])
  const [inputs, setInputs] = useState([])
  const [change, setChange] = useState(false) //admin
  const [login, setLogin] = useState([])
  const [signup, setSignup] = useState([])
  const [logout, setLogout] = useState(false) //see Logout button when enter into homepage
  const [admin, setAdmin] = useState(
    {
      username: 'admin',
      password: '123'
    }
  ) 

  const initial = {
    value: 1
  }

  const [count, dispatcher] = useReducer(reduce, initial)

  const state = {
    input: inputs,
    setInput: setInputs,
    count: count,
    dispatcher: dispatcher,
    products,setProducts,editData,setEditData,
    login, setLogin,
    admin,setAdmin,signup,setSignup,
    logout, setLogout
  }

  const location = useLocation()
  useEffect(() => {
    if (location.pathname.includes("admin") || location.pathname.includes("login") || location.pathname.includes("signup"))   {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [location])

  return (
    <div className="App">

      <Context.Provider value={state}>
        {change ? null : <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product' element={<Products />} />
          <Route path='/productdetails/:id' element={<ProductDetails />} />
          <Route path='/tocart' element={<ToCart />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/boy' element={<Boy />} />
          <Route path='/girl' element={<Girl />} />
          <Route path='/accesories' element={<Accesories />} />
          <Route path='/toy' element={<Toy />} />
          <Route path='/shoe' element={<Shoe />} />
          <Route element={<Admin />} >
              <Route path='/admin/users' element={<Users />} />
              <Route path='/admin/viewproducts' element={<ViewProducts />} />
              <Route path='/admin/addproducts' element={<AddProducts />} />
              <Route path='/admin/editproducts' element={<EditProducts />} />
          </Route>
        </Routes>
        {/* {change ? null : <Footer/>} */}
      </Context.Provider>

    </div>
  )
}

export default App
