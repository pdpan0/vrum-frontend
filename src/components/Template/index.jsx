import React from 'react';
import Navbar from '../Navbar';
import { Main } from './style';
import MainContainer from '../MainContainer';

const Template = ({ children }) => (
    <>
        <Navbar />
        <Main>
            { children }
        </Main>        
    </>
)

export default Template;