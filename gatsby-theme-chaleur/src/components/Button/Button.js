import React from 'react';
import colors from "../../design-tokens/colors";

export default ({ children }) => (
    <div style={{
        backgroundColor: colors.primary,
        border: '1px solid black',
        color: colors.regular,
        padding: '15px 20px',
        marginTop: '10px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '18px',
        cursor: 'pointer',
    }}>
        {children}
    </div>
)