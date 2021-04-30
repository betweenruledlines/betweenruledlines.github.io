import React from 'react'
import Video from '../../videos/Mermaid_4k.mp4'
import {HeroContainer, HeroBg, VideoBg} from './HeroSectionElem';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            {/* <HeroContent>
                <HeroH1>
                    Hi
                </HeroH1>
                <HeroP>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/works">
                        Works
                    </Button>
                </HeroBtnWrapper>
            </HeroContent> */}
            
        </HeroContainer>
    )
}

export default HeroSection
