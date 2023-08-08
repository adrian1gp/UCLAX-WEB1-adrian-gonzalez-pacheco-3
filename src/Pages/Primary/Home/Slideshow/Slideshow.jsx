import styled from 'styled-components';

// components
import SlideList from './SlideList';

const Slideshow = () => {
    return (
        <SlideshowStyled className='Slideshow'>
            
            <SlideList/>
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`
    
`;  