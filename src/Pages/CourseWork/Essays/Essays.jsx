import styled from 'styled-components';

// Compents
import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h2>Essays</h2> 
            <Essay question='Q1: what is the diffrence between html,css,js?'>
                1. answer
            </Essay>
            <Essay question='Q2: what is the diffrence between Git and Gihub?'>
                2. answer
            </Essay>
            <Essay question='Q3 what is the diffrence between JQuery and react?'>
                3. answer
            </Essay>
            <Essay question='Q4: number 4'>
                4. answer
            </Essay>
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`
    
`;