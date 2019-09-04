import React from 'react';
import colors from "../../design-tokens/colors";

export default ({ children }) => (
    <div style={{
        backgroundColor: colors.primary,
        border: '1px solid black',
        color: colors.regular,
        padding: '5px 10px',
        margin: '10px 0 10px 0',
        textAlign: 'center',
        textDecoration: 'none',
        fontSize: '20x',
        cursor: 'pointer',
    }}>
        {children}
    </div>
)