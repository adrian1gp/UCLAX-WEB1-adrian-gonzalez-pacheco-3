import styled from 'styled-components';

// media query
import {breakpoints  } from '@/Common/useMediaQuery';

const TabbedContent = ({curTab}) => {
    return (
        <TabbedContentStyled className='TabbedContent'>
            <div className='column1'>
            <img src={ curTab.image } alt={curTab.title} /> 
            </div>
            <div className='column2'>
            <h3> { curTab.title}</h3>
            <div dangerouslySetInnerHTML={{__html: curTab.text }}> 
            </div>
            </div>
        </TabbedContentStyled>
    );
}

export default TabbedContent;

const TabbedContentStyled = styled.div`
    padding: 20px;
    background-color: teal;

    @media ${breakpoints.isMediumAndUp} {

    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
    }

    .column1 {
        img {
            display: block;
            max-width: 100%;
            
            @media ${breakpoints.isMediumAndUp} { 
                margin: 0px;
            }
        }
    }

    .column2 {
        h3 {
            font-size: 30px;
            color: white;
        }
        P {
            font-size: 18px;
            color: #8cc6c6;
            margin-bottom: 20px;
            line-height: 150%;
        }
    }
`;