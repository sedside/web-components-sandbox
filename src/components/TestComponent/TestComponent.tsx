// @ts-nocheck

import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import FlexibleLayout from '../FlexibleLayout/FlexibleLayout'
import useTheme from '../../hooks/use-theme';

import layouts from './layouts';
import styles from './styles';

const TestComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [isCheckboxChecked, setCheckboxChecked] = useState(false);
    const classes = useTheme(styles)();
    
    return <FlexibleLayout
        layouts={layouts}
        components={{
            Input: <Input label="Инпут" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />,
            Checkbox: <Checkbox label="Чекбокс" isChecked={isCheckboxChecked} onChange={() => {setCheckboxChecked(!isCheckboxChecked)}} />,
            Button: <Button onClick={() => console.log(inputValue)}>Кнопка</Button>
        }}
    />;
};

export default TestComponent;
