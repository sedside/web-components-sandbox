// @ts-nocheck

import React from 'react';
import useTheme from '../../hooks/use-theme';
import styles from './styles';

const Input = ({ label, value, onChange }) =>  {
    const classes = useTheme(styles)();

    return <div className={classes.root}>
        {label && <label className={classes.label}>{label}</label>}
        <input className={classes.input} value={value} onChange={onChange} />
    </div>;
};

export default Input;