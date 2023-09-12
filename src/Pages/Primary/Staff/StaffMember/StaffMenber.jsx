import styled from 'styled-components';

// compents
import StaffBio from './StaffBio';

const StaffMenber = ({member}) => {
    return (
        <StaffMenberStyled className='StaffMenber'>
            <img src={ member.image } alt={member.name} />
            <h3>{ member.name }</h3> 
            {/* <StaffBio member={ member }/> */}
        </StaffMenberStyled>
    );
}

export default StaffMenber;

const StaffMenberStyled = styled.div`
    background-color: #eee;

    img {
        width: 100%;
    }

    h3 {
        font-size: 20px;
        color: white;
        background-color: teal;
        margin: 0px;
        padding: 5px 10px;
    }
`;