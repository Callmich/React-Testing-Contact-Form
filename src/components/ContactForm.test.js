import React from 'react';
import { render, fireEvents } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders correctly', ()=> {
    render(<ContactForm/>)
})