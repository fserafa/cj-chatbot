import React, { useEffect, useState } from 'react';
import { Container, Box } from '@material-ui/core/';
import ChatBot from 'react-simple-chatbot';
import data from '../data/cj';
import Message from '../components/Message';

import avatar from '../assets/avatar.jpg';

export default function Index() {
    const [endChat, setEndChat] = useState(false)
    const [userMessage, setUserMessage] = useState('')
    const [steps, setSteps] = useState([
        {
            id: 1,
            message: handleMessage(),
            trigger: 'user'
        },
        {
            id: 'user',
            user: true,
            trigger: 'component'
        },
        {
            id: 'component',
            component: <Message />,
            asMessage: true,
            trigger: 'user',
        },
        {
            id: 'end',
            message: handleMessage(),
            end: true,
        }
    ])

    useEffect(() => {
        if (userMessage === 'end') {
            console.log('end')
            setEndChat(true)
        }
    }, [userMessage])

    function handleMessage() {
        let random = data[Math.floor(Math.random() * data.length)];
        return random;
    }

    return (
        <Container
            style={{
                paddingTop: '10px',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row'
            }}>
            <Box style={{ width: '100%' }}>
                <ChatBot
                    contentStyle={{ minHeight: '70vh', }}
                    style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    width='100%'
                    steps={steps}
                    botAvatar={avatar}
                />
            </Box>
            <h1>isso ai brother</h1>
            <h1>isso ai brother</h1>
            <h1>isso ai brother</h1>
            <h1>isso ai brother</h1>
        </Container >
    );
}
