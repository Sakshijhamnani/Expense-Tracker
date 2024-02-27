import { render, screen ,waitFor} from "@testing-library/react"
import AuthForm from '../SignUp/AuthForm.js'
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import {store} from '../Reducers/store.js'


describe('Auth Component',()=>{
    test('does not render "good to see you if button was clicked',async()=>{
        //Arrange
        render(
            <Provider store={store}>
            <BrowserRouter>
        <AuthForm/>
        </BrowserRouter>
        </Provider>)

        //Act
      

        //Assert
        await waitFor(() => {
            const outputElement = screen.getByText('Email:', { exact: false })
            expect(outputElement).toBeInTheDocument();
        })
    })


    
    
})