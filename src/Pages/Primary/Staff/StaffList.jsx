import styled from 'styled-components';

// data
import { staffData } from './staffData';

// compents
import StaffMenber from './StaffMember/StaffMenber';

const StaffList = () => {
    return (
        <StaffListStyled className='StaffList'>

            {
                staffData.map((member) => {
                    return <StaffMenber key={ member.id } member={ member }/>
                })
            }

            
        </StaffListStyled>
    );
}

export default StaffList;

const StaffListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
`;