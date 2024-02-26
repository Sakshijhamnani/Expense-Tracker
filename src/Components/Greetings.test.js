import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

describe('Greeting component',()=>{
    test('renders Hello World as a text',()=>{
        //Arrange
        render(<Greetings/>)
    
        //Act
        //...nothing
    
    
        //Assert
        const helloWorldElement=screen.getByText('Hello World!')
        expect(helloWorldElement).toBeInTheDocument()
    
    });
});

