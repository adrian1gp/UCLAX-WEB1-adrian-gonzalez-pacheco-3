import styled from 'styled-components';

// Data
//import { tabbedData } from './tabbed/tabbedData';

// compents
import Inset from '@/Common/PagesLayout/Inset';
import Slideshow from './Slideshow/Slideshow';
import Tabbed from '@/Common/Tabbed/Tabbed';
const Home = () => {
    return (
        <HomeStyled className='Home'>
            <h1>Home</h1> 
            <Slideshow/>
            <Inset>
               {/* <Tabbed tabbedData={tabbedData}/> */}
            </Inset>
        </HomeStyled>
    );
}

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }
`;