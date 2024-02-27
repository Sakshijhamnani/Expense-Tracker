import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from '../Reducers/store'




describe('Navbar ',()=>{
    test('renders Hello World as a text',()=>{
        //Arrange
        render(
        
       <Provider store={store}>
         <BrowserRouter>
         <Navbar/>
         </BrowserRouter>
         </Provider>)
    
        //Act
        //...nothing
    
    
        //Assert
        const helloWorldElement=screen.getByText('Home')
        expect(helloWorldElement).toBeInTheDocument()
    
    });
    test('renders Hello World as a text',()=>{
        //Arrange
        render(
        
       <Provider store={store}>
         <BrowserRouter>
         <Navbar/>
         </BrowserRouter>
         </Provider>)
    
        //Act
        //...nothing
    
    
        //Assert
        const helloWorldElement=screen.getByText('Profile')
        expect(helloWorldElement).toBeInTheDocument()
    
    });
   
  
  
});
