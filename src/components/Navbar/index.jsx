import React from 'react'
import { NavbarWrapper, LogoWrapper } from './style'
import logo from './logo.png'

const Navbar = () => (
    <NavbarWrapper>
        <LogoWrapper to="/" >
            <img src={logo}/>
            Vrum
        </LogoWrapper>
    </NavbarWrapper>
)

export default Navbar;