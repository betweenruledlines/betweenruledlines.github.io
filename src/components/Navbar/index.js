import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElem';

const Navbar = ({toggle}) => {



    return (
     <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    Betweenruledlines
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/works">Works</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about">About</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
     </>   
    );
}

export default Navbar;