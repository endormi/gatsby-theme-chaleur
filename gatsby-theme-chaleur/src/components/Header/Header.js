import React from 'react';
import colors from "../../design-tokens/colors";

export default ({ children }) => (
    <div style={{
        padding: '1.2rem',
        backgroundColor: colors.primary,
        color: colors.regular,
        marginBottom: '20px'
    }}>
        {children}
    </div>
)