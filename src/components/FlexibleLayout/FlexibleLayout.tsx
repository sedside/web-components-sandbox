// @ts-nocheck

import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../hooks/use-theme';

const FlexibleLayout = ({ layouts, components }) => {
    const theme = useContext(ThemeContext);
    const Layout = layouts[theme] || layouts.common;

    return <Layout components={components} />
};

export default FlexibleLayout;
