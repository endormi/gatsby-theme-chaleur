import React from 'react';
import './style.css';

export default ({ children }) => (
    <div style={{
        padding: '0',
        margin: '0',
        display: 'block',
        fontFamily: 'Verdana, Geneva, sans-serif',
    }}>
        {children}
    </div>
)