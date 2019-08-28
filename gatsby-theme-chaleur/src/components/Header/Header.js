import React from 'react';
import colors from "../../design-tokens/colors";

export default ({ children }) => (
    <div style={{
        padding: '1.5rem',
        textAlign: 'center',
        backgroundColor: colors.primary,
        color: colors.regular,
    }}>
        {children}
    </div>
)