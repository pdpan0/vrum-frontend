import React from 'react';
import { Navbar } from '../Navbar';
import { Main } from './style';

export const Template = ({ children }) => (
    <>
        <Navbar />
        <Main>
            { children }
        </Main>        
    </>
)