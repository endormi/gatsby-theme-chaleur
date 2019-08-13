import React from 'react';

export default ({ children }) => (
    <div style={{
        margin: '1rem auto',
        display: 'block',
        maxWidth: '80%',
        width: '500px'
    }}>
        {children}
    </div>
)