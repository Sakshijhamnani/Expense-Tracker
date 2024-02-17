import logo from './logo.svg';
import './App.css';
import AuthForm from './SignUp/AuthForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
   
    <div>
       <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<AuthForm/>}/>
       </Routes>
   {/* <SignUp/> */}
   </BrowserRouter>
    </div>
  );
}

export default App;
