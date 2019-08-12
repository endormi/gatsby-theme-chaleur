import React from 'react';
import colors from "../../design-tokens/colors";

export default ({ children }) => (
    <div style={{
        backgroundColor: colors.reg,
        color: colors.regular,
        padding: '20px',
        fontSize: '15px',
        textAlign: 'center',
        textDecoration: 'none',
        overflow: 'hidden',
    }}>
        {children}
    </div>
)