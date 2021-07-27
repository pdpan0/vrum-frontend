import React from 'react'
import { NavbarWrapper, Image, LogoWrapper } from './style'
import logo from './logo.png'

const Navbar = () => (
    <NavbarWrapper>
        <LogoWrapper to="/" >
            <Image src={logo}/>
            Vrum
        </LogoWrapper>
    </NavbarWrapper>
)

export default Navbar;