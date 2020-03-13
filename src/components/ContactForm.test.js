import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders correctly', ()=> {
    render(<ContactForm/>)
})

test('form will add fname, lname, email, and message to data in state and display on the page', () => {
    const { getByLabelText, findByTestId, findAllByText } = render(<ContactForm/>);

    // query for the form inputs
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    //fireEvent function from RTL to fill inputs
    fireEvent.change(firstNameInput, { target: { name: 'firstName', value: 'Michael' } });
    fireEvent.change(lastNameInput, { target: { name: 'lastName', value: 'Callahan' } });
    fireEvent.change(emailInput, { target: { name: 'email', value: 'Callahan@gmail.com' } });
    fireEvent.change(messageInput, { target: { name: 'message', value: 'Here is a message' } });

    findByTestId('submit').then((res)=> {
        fireEvent.click(res);
    })

    // const submitButton = findByTestId('submit');

    // fireEvent.click(submitButton);

    findAllByText(/michael/i);

})