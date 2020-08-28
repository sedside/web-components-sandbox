// @ts-nocheck

import React, { useState } from 'react';
import useTheme from '../../../hooks/use-theme';

import styles from '../styles';

const RedClient = ({ components }) => {
    const classes = useTheme(styles)();
    const { Input, Checkbox, Button } = components;

    return <div className={classes.root}>
        <h1 className={classes.heading}>Эта форма может менять расположение элементов</h1>
        <div className={classes.inputWithCheckbox}>
            {Input}
            <div className={classes.checkbox}>
                {Button}
            </div>
            <div>
                {Checkbox}
            </div>
        </div>
    </div>;
};

export default RedClient;
