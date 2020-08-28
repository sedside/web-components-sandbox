// @ts-nocheck

import React from 'react';
import useTheme from '../../hooks/use-theme';
import styles from './styles';

const Button = ({ children, onClick }) =>  {
    const classes = useTheme(styles)();

    return <div className={classes.root}><button className={classes.button} onClick={onClick}>{children}</button></div>;
};

export default Button;