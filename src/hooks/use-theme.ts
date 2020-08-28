// @ts-nocheck

import React, { createContext, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import merge from 'lodash/merge';

const ThemeContext = createContext('common');

const useTheme = (styles) => {
    const theme = useContext(ThemeContext);
    const newStyles = {};
    merge(newStyles, styles.common);
    merge(newStyles, styles[theme]);

    return createUseStyles(newStyles);
};

export default useTheme;
export { ThemeContext };