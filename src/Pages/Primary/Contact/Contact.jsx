import { useState, useEffect } from 'react';
import styled from 'styled-components';

// components
import Inset from '@/Common/PagesLayout/Inset';
import Form from './Form';
import SubmissionList from './SubmissionList';
import axios from 'axios';
import { faX } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {

    const [submissions, submissionsUpdate] = useState([]);

    const getSubmissions = async () => {
        const {data} =  await axios.get("http://localhost:4059/submissions")
        submissionsUpdate(data);
    }
    // when component mounts
    useEffect(() => {
        getSubmissions();
    },[]);

    console.log({submissions})

    return (
        <ContactStyled className='Contact'>
            <Inset>
                <h1>Contact</h1> 
                <Form getSubmissions={getSubmissions}/>
                <SubmissionList submissions={submissions}/>
                
            </Inset>
        </ContactStyled>
    );
}

export default Contact;

const ContactStyled = styled.div`
    
`;