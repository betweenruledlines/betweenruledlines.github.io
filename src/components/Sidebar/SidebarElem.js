import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'
import {Link as LinkR }  from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background:#111111 ;
    display:grid;
    align-items: center;
    top:0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
 color:#fff;
    &:hover{
        color:var(--accent-color-two);
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 3.8rem;
    right: 1.9rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline:none;

`



export const SidebarWrapper = styled.div`
    color:#fff;
`

export const SidebarMenu  = styled.div`
   display:grid;
   grid-template-columns: 1fr;
   grid-template-rows:repeat(6,80px); 
   text-align: center;

   @media screen and (max-width: 480px){
       grid-template-rows: repeat(6,60px);
   }
`

export const SidebarLink = styled(LinkR)`
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration:none;
    list-style:none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor:pointer;
    font-family: "Sergio Trendy", sans-serif;
    transition: 0.2s ease-in-out;
    margin:auto;
    padding: 10px 0px;

    &:hover {
        color:var(--accent-color-two);
       border-top: 2px solid var(--accent-color-two);
       border-bottom: 2px solid var(--accent-color-two);
    }
`