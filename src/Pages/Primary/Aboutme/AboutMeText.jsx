import styled from 'styled-components';

const AboutMeText = () => {
    return (
        <AboutMeTextStyled className='AboutMeText'>
            <h1>About me </h1> 
        </AboutMeTextStyled>
    );
}

export default AboutMeText;

const AboutMeTextStyled = styled.div`
    h1{
        color: black;
        font-size: 40px;
    }
`;