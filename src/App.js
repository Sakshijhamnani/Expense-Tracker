import logo from './logo.svg';
import './App.css';
import AuthForm from './Components/SignUp/AuthForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import ContactDetails from './Components/ContactDetails/ContactDetails';
import { AuthContextprovider } from './Components/AuthContext/auth-context';
import Profile from './Components/Profile/Profile';
import VerifyEmail from './Components/VerifyEmail/VerifyEmail';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import DailyExpenses from './Components/DailyExpenses/DailyExpenses';
import CartProvider from './Components/CartContext/CartProvider';

function App() {
  return (
   
    <div>
      <CartProvider>
      <AuthContextprovider>
       <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<AuthForm/>}/>
       <Route path='/contactdetails' element={<ContactDetails/>}/>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/verifyEmail' element={<VerifyEmail/>}/>
       <Route path='/forgotpassword' element={<ForgotPassword/>}/>
       <Route path='/dailyexpenses' element={<DailyExpenses/>}/>
       </Routes>
   {/* <SignUp/> */}
   </BrowserRouter>
   </AuthContextprovider>
   </CartProvider>
   <a href=''>Hello React</a>
    </div>
  );
}

export default App;
