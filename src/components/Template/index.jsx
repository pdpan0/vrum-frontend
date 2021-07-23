import React from 'react';
import Navbar from '../Navbar';
import { Main } from './style';

const Template = ({ children }) => (
    <>
        <Navbar />
        <Main>
            { children }
        </Main>        
    </>
)

export default Template;