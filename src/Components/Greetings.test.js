import { render, screen,waitFor } from "@testing-library/react";
import Greetings from "./Greetings";
import userEvent from '@testing-library/user-event'

describe('Greeting component',()=>{
   

    test('renders good to see you if button was NOT clicked',()=>{
        render(<Greetings/>);

        const outputElement=screen.getByText('good to see you',{exact:false});
        expect(outputElement).toBeInTheDocument();

    });

    test('renders "Changed!" if the button was clicked',async ()=>{
        //Arrange
        render(<Greetings/>);

        //Act
        const buttonElement=screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        await waitFor(() => {
            const outputElement=screen.getByText('Changed!', { exact: false });
            expect(outputElement).toBeInTheDocument();
        });
    });
    test('does not render "good to see you if button was clicked',async()=>{
        //Arrange
        render(<Greetings/>)

        //Act
        const buttonElement=screen.getByRole('button')
        userEvent.click(buttonElement)

        //Assert
        await waitFor(() => {
            const outputElement = screen.queryByText('good to see you', { exact: false })
            expect(outputElement).toBeNull()
        })
    })
});

