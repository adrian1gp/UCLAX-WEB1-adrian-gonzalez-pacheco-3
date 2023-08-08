import { useState } from 'react';
import styled from 'styled-components';

// Data
import { tabbedData } from './tabbedData';


// components
import TabList from './Tabs/TabList';
import TabbedContent from './TabbedContent';

const Tabbed = () => {

    const[curTab, curTabUpdate] = useState(tabbedData[0]);
    return (
        <TabbedStyled className='Tabbed'> 
            <TabList curTab={ curTab } curTabUpdate={curTabUpdate} tabs={tabbedData}/>
            <TabbedContent curTab={ curTab }/>
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`
    
`;