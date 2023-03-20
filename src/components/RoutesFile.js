import React,{useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
// import Dashboard from './Dashboard/Dashboard';
// import PrivateRoute from './PrivateRoute';
import PasswordReset from './PasswordReset/PasswordReset';
import EmailVerification from "./EmailVerification";
import ForgotPassword from './ForgotPassword/ForgotPassword';
import SuccessfullRegistration from './SuccessfullRegistration/SuccessfullRegistration';
// import Server from './Dashboard/components/homepage/Server';
import CardPage from './Dashboard/components/homepage/CardPage';
import Profile from './Dashboard/components/loginComponents/Profile';
import Help from './Dashboard/components/loginComponents/Help';
import Sell from './Dashboard/components/loginComponents/Sell';
import MyOrder from './Dashboard/components/loginComponents/MyOrder';
import ProductCard from './Dashboard/components/homepage/ProductCard';
// import Navbar from './Dashboard/components/homepage/Navbar';

const RoutesFile = ({isAuthenticated,setIsAuthenticated}) => {
  const [productData,setProductData]=useState([]);
  const [q,setQ]=useState(0);
  

  // function MyComponent() {
  //   window.location.href = 'http://localhost:3001/';
  //   return null;
  // }


  return (
    <BrowserRouter>
      <Routes>
        {/* home page par landing */}
        <Route exact path="/" element={<FirstPage setIsAuthenticated={setIsAuthenticated}/>} />
        <Route exact path="/success" element={<SuccessfullRegistration />} />
        <Route exact path="/api/v1/verify/:code/:code" element={<EmailVerification />} />
        <Route exact path="/api/v1/password/reset/:code" element={<PasswordReset />} />
        {/* <Route exact path="/passwordreset" element={<PasswordReset />} /> */}
        {/* this  is route that will depend on whether the user is logged in or not. if not logged in then the state value we get is false,else true */}
        {/* on path /dashboard we will render element based on value os isAuthenticated. */}


        {/* <Route exact path="/dashboard" element={<PrivateRoute Component={Dashboard} auth={isAuthenticated} />} /> */}
        {/* <Route exact path="/dashboard" element={<PrivateRoute Component={Server} auth={isAuthenticated} />} /> */}
        <Route path="/card" element={<CardPage  setQ={setQ} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help" element={<Help />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/MyOrder" element={<MyOrder />} />
          <Route path="/login" element={"Login"} />
          <Route exact path="/dashboard" element={<ProductCard setProductData={setProductData} productData={productData} />}></Route>
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  )
}
export default RoutesFile
