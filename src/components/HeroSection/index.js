import React from 'react'
import Video from '../../videos/loop_2k.mp4'
import Poster from '../../videos/poster.jpg';
import {HeroContainer,HeroWrapper, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Button} from './HeroSectionElem';



const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} poster={Poster} type="video/mp4"/>
            </HeroBg>
            <HeroWrapper>
            <HeroContent>
                <HeroH1>
                    Hi
                </HeroH1>
                <HeroP>
                   Hello Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/works">
                        Works
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
           </HeroWrapper> 
        </HeroContainer>
    )
}

export default HeroSection
