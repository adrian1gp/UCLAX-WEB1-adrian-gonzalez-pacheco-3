import styled from 'styled-components';

// eREACT Carousel: third party library
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// data
import { slidesData } from './slidesData';

// components
import Slide from './Slide';

const SlideList = () => {
    return (
        <SlideListStyled className='SlideList'>
            <Carousel>
                {
                    slidesData.map((slide) => {
                        return <Slide key={ slide.id } slide={ slide } />;
                    })
                }
            </Carousel>
        </SlideListStyled>
    );
}

export default SlideList;

const SlideListStyled = styled.div`
    .carousel .slide .legend {
        background-color: #004444;
    }
`;