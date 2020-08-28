// @ts-nocheck

import React, { useState } from 'react';
import useTheme from '../../../hooks/use-theme';

import styles from '../styles';

const BlackClient = ({ components }) => {
    const classes = useTheme(styles)();
    const { Input, Checkbox, Button } = components;

    return <div className={classes.root}>
        <h1 className={classes.heading}>Эта форма может менять расположение элементов</h1>
        <p>И добавлять новые</p>
         <div>
            <img className={classes.catPicture} src="https://klike.net/uploads/posts/2019-07/1564314090_3.jpg"/>
            <div>Например, картинку с котиком</div>
        </div>
        <div className={classes.inputWithCheckbox}>
            {Input}
            <div className={classes.checkbox}>
                {Checkbox}
            </div>
        </div>
        {Button}
    </div>;
};

export default BlackClient;
