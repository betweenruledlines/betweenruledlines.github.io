import styled from 'styled-components';
import {Link as LinkR }  from 'react-router-dom';

export const Nav = styled.nav`
    /* background: #000; */
    background-image:linear-gradient(rgba(17,17,17,1) 8% , rgba(0,0,0,0) );
    height: 150px;
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
    /* height: 80px; */
    z-index: 1;
    width: 100%;
    padding: 0 44px;
     max-width: 1600px;

`

export const NavLogo = styled(LinkR)`
    color: #fff;
    font-family: "brl-font", sans-serif;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.7rem;
    padding-top:4px;
    margin: 30px 1rem;
    align-items:center;
    /* margin-left: 124px; */
    text-decoration:none;

    border-top: 2px solid #ffffff00; 
    border-bottom: 2px solid #ffffff00;
    transition: all 0.2s ease-in-out;

    &:hover {
        color:var(--accent-color-two);
        border-top: 2px solid var(--accent-color-two);
        border-bottom: 2px solid var(--accent-color-two);
    }
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;

    }
    @media screen and (max-width: 375px){
        /* transition: 0.8s all ease; */
        font-size:1.3rem;
        padding-top:8px;

    }
`

export const MobileIcon = styled.div`
    display:none;

    transition: 0.2s ease-in-out;

    &:hover {
        color:var(--accent-color-two);
    }
    @media screen and (max-width: 768px){
        display:block;
        position:absolute;
        padding-top:10px;
        top: 1;
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
    font-family: "brl-font", sans-serif;
    font-size: 1.7rem;
    transition: 0.2s ease-in-out;

    &:hover {
        color:var(--accent-color-two);
    }
    
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
    margin: 30px 1rem;
    /* height: 100%; */
    /* margin:auto; */
    cursor: pointer;
    border-top: 2px solid #ffffff00; 
    border-bottom: 2px solid #ffffff00;
    transition: 0.2s ease-in-out;
    font-family: "brl-font", sans-serif;

    &:hover {
        color:var(--accent-color-two);
        /* text-decoration:underline overline; */
        
       border-top: 2px solid var(--accent-color-two);
       border-bottom: 2px solid var(--accent-color-two);
    }

    
`