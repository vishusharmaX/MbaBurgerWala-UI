import React, { useEffect } from 'react'
import './styles/app.scss'
import {useDispatch,useSelector} from "react-redux";

import {loadUser} from "./redux/actions/user"

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './component/layout/Header'
import Home from './component/Home/Home'
import Footer from './component/layout/Footer'
import Contact from './component/Contact/Contact'
import Cart from './component/cart/Cart'
import Shipping from './component/cart/Shipping'
import ConfirmOrder from './component/cart/ConfirmOrder'
import PaymentSuccess from './component/cart/PaymentSuccess'
import Login from './component/Login/Login'
import Profile from './component/profile/Profile'
import MyOrder from './component/MyOrders/MyOrder'
import OrderDetails from './component/MyOrders/OrderDetails'
import Dashboard from './component/admin/Dashboard'
import User from './component/admin/User'
import Order from './component/admin/Order'
import About from './component/about/About'
import NotFound from './component/layout/NotFound'
import toast,{Toaster} from "react-hot-toast"
import {ProtectedRoute} from "protected-route-react"

const App = () => {

  const dispatch = useDispatch();
  const {error,message,isAuthenticated,user} = useSelector((state)=>state.auth)

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])
  
  useEffect(() => {
   if(error){
    toast.error(error);
    dispatch({
      type: "clearError",
    });
   }
   if(message){
    toast.success(message);
    dispatch({
      type: "clearMessage",
    });
   }
  }, [dispatch,error,message]);
  


  return (
   <Router>
    <Header isAuthenticated={isAuthenticated}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>

      <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect ="/me">
        <Login/>
      </ProtectedRoute>}/>


      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
      <Route path='/me' element={<Profile />}/>
      <Route path='/shipping' element={<Shipping/>}/>
      <Route path='/confirmorder' element={<ConfirmOrder/>}/>
      <Route path='/myorders' element={<MyOrder/>}/>
      <Route path='/order/:id' element={<OrderDetails/>}/>
      </Route>

      
      

    <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} 
      adminRoute ={true}
      isAdmin ={user && user.role === "admin"}
      redirectAdmin ="/me"
    />}  >
    <Route path='/admin/dashboard' element={<Dashboard/>}/>
      <Route path='/admin/users' element={<User/>}/>
      <Route path='/admin/orders' element={<Order/>}/>
    </Route>

      




      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    <Toaster/>
   </Router>
  )
}

export default App