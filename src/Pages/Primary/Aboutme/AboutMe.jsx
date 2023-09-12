import styled from 'styled-components';
import AboutMeText from './AboutMeText';
import Tabbed from '@/Common/Tabbed/Tabbed';
import Inset from '@/Common/PagesLayout/Inset';

// Data
import { tabbedData } from './tabbed/tabbedData';

// packages
import React from 'react'
import ReactPlayer from 'react-player'

const AboutMe = () => {
    return (
        <AboutMeStyled className='AboutMe'>
            <Inset>
            <Tabbed tabbedData={tabbedData}/>
            <h3>Here is a video from one of my favorite youtubers. Bricksie.</h3>
            <ReactPlayer url='https://www.youtube.com/watch?v=Loo_HUov_WM'/>
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'/> */}
            </Inset>
        </AboutMeStyled>
    );
}

export default AboutMe;

const AboutMeStyled = styled.div`
    
`;