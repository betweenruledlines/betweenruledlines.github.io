import styled from 'styled-components';
import {Link as LinkR }  from 'react-router-dom';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: reletive;
    z-index: 1;



`

export const HeroBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
`

export const VideoBg = styled.video`
    width:  100%;
    height: 100%;
    -o-object-fit:cover;
    object-fit: cover;
    background: #000;
`

export const HeroWrapper = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    display:grid;
    place-items:center;
    background-image:linear-gradient( rgba(0,0,0,0), rgba(17,17,17,1) );

`

export const HeroContent = styled.div`
    z-index:3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 58px;
    text-align: center;
    font-family: "brl-font", sans-serif;

    @media screen and (max-width: 768px){
        font-size: 40px;
    } 
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
    
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 18px;
    line-height:27px;
    text-align: center;
    max-width: 500px;
    font-family: Lato, sans-serif;

    @media screen and (max-width: 768px){
        font-size: 16px;
        line-height:22px;
        max-width: 400px;
    } 
    @media screen and (max-width: 480px){
        font-size: 16px;
        line-height: 22px;
        max-width: 400px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

`


export const Button = styled(LinkR)`
    border-radius: 26px;
    background: #cdcdcd;
    padding: 8px 48px;
    color: #fff;
    text-decoration:none;
    font-size:15px;
    background: var(--accent-color);
    transition: 0.2s ease-in-out;
    margin: 4px;
    font-family: Lato, sans-serif;
    font-weight:600;
    border: 2px solid  var(--accent-color);
    
   &:hover {
       background:none;
       border-radius:0;
       border-left: none;
       border-right: none;
       border-top: 2px solid var(--accent-color);
       border-bottom: 2px solid var(--accent-color);
       color:#fff;
   } 
    @media screen and (max-width: 768px){
        font-size: 16px;
        padding: 12px 28px;
    }

`

export const HeroSocialWrapper = styled.div`
    display:flex;
    padding-top: 29px;

`
export const SocialIcon = styled.a`
    padding: 0px 10px;
    
`

export const Img = styled.img`
    opacity:100%;
    transition: all 0.3s ease-in-out;

    &:hover{
        opacity:50%;
    }
`
