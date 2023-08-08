import styled from 'styled-components';

const TabbedContent = ({curTab}) => {
    return (
        <TabbedContentStyled className='TabbedContent'>
            <img src={ curTab.image } alt={curTab.title} /> 
            <h3> { curTab.title}</h3>
        </TabbedContentStyled>
    );
}

export default TabbedContent;

const TabbedContentStyled = styled.div`
    padding: 20px;
    background-color: teal;
`;