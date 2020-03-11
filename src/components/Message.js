import React, { useState, useEffect } from 'react';

import data from '../data/cj';

export default function Message(props) {
    const [random, setRandom] = useState('')

    useEffect(() => {
        let random = data[Math.floor(Math.random() * data.length)];
        setRandom(random)
    }, [])

    return (
        <>
            {random}
        </>
    );
}
