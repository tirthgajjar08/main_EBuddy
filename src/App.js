import React from 'react';
import './App.css';
import './Sellerstyle.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFoundPage from './components/NotFoundPage';
import Forgetpassword from './pages/Forgetpassword';
import Forgetpass2 from './pages/Forgetpass2';

import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';
import Paymentsuccess from './pages/Paymentsuccess';
import MainPayment from './pages/MainPayment';
import MyOrders from './pages/MyOrders';
import OrderInformation from './pages/OrderInformation';
import Invoiceproduct from './pages/Invoiceproduct';
import EditProfile from './pages/EditProfile';
import Sidebar from './components/seller_com/Sidebar';
import Dashboard from './seller/Dashboard'
import ProductListing from './seller/ProductListing'
import AddProduct from './seller/AddProduct';
import SellerPayment from './seller/SellerPayment';
import SellerEditProfile from './seller/SellerEditProfile';
import SellerEditProduct from './seller/SellerEditProduct';
// import SellerLogin from './seller/SellerLogin'
import SellerLogin from "./seller/SellerLogin"
import WelcomePage from './pages/WelcomePage';
import WelHeader from './pages/WelHeader';
import SellerSignUp from './seller/SellerSignUp';
import SellerForgetpass from './seller/SellerForgetpass';
import SellerForgetpass2 from './seller/SellerForgetpass2';
import AdSideBar from "./components/admin_com/AdSideBar"
import AdminDashboard from './admin/AdminDashboard';
import AdminAddProduct from './admin/AdminAddProduct';
import AdminPayment from './admin/AdminPayment';
import AdminProductList from './admin/AdminProductList';
import AdminSeller from './admin/AdminSeller';
import AdminCustomer from './admin/AdminCustomer';
import AdminMyorder from './admin/AdminMyorder';
import AdminEditProfile from './admin/AdminEditProfile';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route  path="/ourstore" element={<OurStore/>}/>
        <Route  path="/singleproduct/:product_id" element={<SingleProduct/>}/>
        <Route path="/contactus" element={<Contact/>}/>
        <Route path="/payment" element={<MainPayment/>}/>

        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgetpassword" element={<Forgetpassword/>}/>
        <Route path="/forgetpassword2" element={<Forgetpass2/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route  path="/checkout" element={<Checkout/>}/>
        <Route  path="/payment-successful" element={<Paymentsuccess/>}/>
        <Route path="/myorders" element={<MyOrders/>} />  
        <Route path="/editprofile" element={<EditProfile/>}/>
        <Route path="/orderinformation" element={<OrderInformation/>}/>
        <Route path="/invoice" element={<Invoiceproduct/>}/>
        <Route path="/welcomeseller" element={<WelcomePage/>}/>
       
      </Route>{/* End User panel*/}

      <Route path="/becomeseller" element={<WelHeader/>}>
                 <Route index element={<WelcomePage/>}/>
      </Route>

      <Route path='/sellerlogin' element={<SellerLogin/>}/>
      <Route path='/sellersignup' element={<SellerSignUp/>}/>
      <Route path='/sellerforgetpassword' element={<SellerForgetpass/>}/>
      <Route path='/sellerforgetpassword2' element={<SellerForgetpass2/>}/>

       <Route path="/seller" element={<Sidebar/>}>
            
            <Route index  element={<Dashboard/>}/>  
            <Route path="addproduct" element={<AddProduct/>}/>
            <Route path="productlisting" element={<ProductListing/>}/>
            <Route path='payment' element={<SellerPayment/>}/>
            <Route path='editprofile' element={<SellerEditProfile/>}/>
            <Route path='editproduct' element={<SellerEditProduct/>}/>
      </Route>

      <Route path='/admin' element={<AdSideBar/>}>
          <Route index element={<AdminDashboard/>}/>
          <Route path='addproduct' element={<AdminAddProduct/>}/>
          <Route path='payment' element={<AdminPayment/>}/>
          <Route path='productlisting' element={<AdminProductList/>}/>
          <Route path='adminseller' element={<AdminSeller/>}/>
          <Route path='adminmyorder' element={<AdminMyorder/>} />
          <Route path='admincustomer' element={<AdminCustomer/>}/>
          <Route path='admineditprofile' element={<AdminEditProfile/>}/>

      </Route>
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
