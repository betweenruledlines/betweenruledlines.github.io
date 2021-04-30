import styled from 'styled-components';
import {Link as LinkR }  from 'react-router-dom';

export const Nav = styled.nav`
    /* background: #000; */
    background-image:linear-gradient(#111111 10%, #ffffff00);
    height: 120px;
    /* margin-top: -80px; */
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 44px;
    max-width: 1600px;

`

export const NavLogo = styled(LinkR)`
    color: #fff;
    font-family: "Sergio Trendy", sans-serif;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items:center;
    /* margin-left: 124px; */
    text-decoration:none;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;

    }
`

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display:block;
        position:absolute;
        top: 2;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color:#fff;
    }
`

export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style: none;
text-aling: center;
margin-right: -22px;
font-family: "Sergio Trendy", sans-serif;
    
    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkR)`
    color:#fff;
    display:flex;
    align-items: center;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    
`