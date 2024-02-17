import logo from './logo.svg';
import './App.css';
import AuthForm from './Components/SignUp/AuthForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import ContactDetails from './Components/ContactDetails/ContactDetails';
import { AuthContextprovider } from './Components/AuthContext/auth-context';

function App() {
  return (
   
    <div>
      <AuthContextprovider>
       <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<AuthForm/>}/>
       <Route path='/contactdetails' element={<ContactDetails/>}/>
       </Routes>
   {/* <SignUp/> */}
   </BrowserRouter>
   </AuthContextprovider>
    </div>
  );
}

export default App;
