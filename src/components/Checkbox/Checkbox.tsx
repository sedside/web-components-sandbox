// @ts-nocheck

import React from 'react';
import clsx from 'clsx';
import useTheme from '../../hooks/use-theme';
import styles from './styles';

const Checkbox = ({ label, isChecked, onChange }) =>  {
    const classes = useTheme(styles)();

    return <div className={classes.root}>
        <label className={clsx(classes.label, { [classes.checked]: isChecked })}>
            <input type="checkbox" className={classes.input} checked={isChecked} onChange={onChange} />
            {label}
        </label>
    </div>;
};

export default Checkbox;