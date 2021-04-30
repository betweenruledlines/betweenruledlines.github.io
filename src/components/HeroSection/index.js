import React from 'react'
import Video from '../../videos/mermaid_final.mp4'
import Poster from '../../videos/poster.jpg';
import {HeroContainer,HeroWrapper, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Button, HeroSocialWrapper, SocialIcon, Img} from './HeroSectionElem';



const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} poster={Poster} type="video/mp4"/>
            </HeroBg>
            <HeroWrapper>
            <HeroContent>
                <HeroH1>
                    Hi,
                </HeroH1>
                <HeroP>
                   Welcome to my world of odd beings. My works explore a wide range of playful subjects. At present, I am fascinated with creating more intricate and delicate forms of an imaginary ecosystem, twisting and floating together in captivating environments. 
My gallery will be up online soon!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/works">
                        GALLERY
                    </Button>
                </HeroBtnWrapper>
                <HeroSocialWrapper>
                    <SocialIcon href="https://www.instagram.com/betweenruledlines/" target="_blank">
                       <Img src={`${process.env.PUBLIC_URL}/icons/instagram.svg`}/>
                    </SocialIcon>
                    <SocialIcon href="https://pin.it/VsrcgDz" target="_blank">
                       <Img src={`${process.env.PUBLIC_URL}/icons/pin.svg`}/>
                    </SocialIcon>
                    <SocialIcon href="https://twitter.com/betweenruledli1" target="_blank">
                       <Img src={`${process.env.PUBLIC_URL}/icons/twitter.svg`}/>
                    </SocialIcon>
                    <SocialIcon href="https://www.behance.net/AishwaryaVaradharaj" target="_blank">
                       <Img src={`${process.env.PUBLIC_URL}/icons/behance.svg`}/>
                    </SocialIcon>
                    <SocialIcon href="https://dribbble.com/Betweenruledlines" target="_blank">
                       <Img src={`${process.env.PUBLIC_URL}/icons/dribble.svg`}/>
                    </SocialIcon>
                    <SocialIcon href="mailto:betweenruledlines@gmail.com" target="_blank">
                       <Img src={`${process.env.PUBLIC_URL}/icons/email.svg`}/>
                    </SocialIcon>
                </HeroSocialWrapper>
            </HeroContent>
           </HeroWrapper> 
        </HeroContainer>
    )
}

export default HeroSection
