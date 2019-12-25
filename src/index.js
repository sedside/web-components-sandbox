import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button/button';
import Checkbox from './components/checkbox/checkbox';
import Input from './components/input/input';
import createWebComponent from './web-component-wrappers/create-web-component';

console.log('index', 'Hello from UI library');

createWebComponent(Button, 's7-button', ['label', 'isDisabled', 'isSubmit', 'type', 'size']);
createWebComponent(Checkbox, 's7-checkbox', ['options', 'values', 'type', 'size']);
createWebComponent(
    Input,
    's7-input',
    [
        'label',
        'placeholder',
        'isDisabled',
        'isRequired',
        'size',
        'labelSize',
        'labelPosition',
        'type'
    ]
);

// define(() => ({
//     Button,
//     Checkbox,
//     Input
// }));

(function (global, factory) {
    // eslint-disable-next-line no-undef
    define(factory);
}(this, (() => ({
    React,
    ReactDOM,
    Button,
    Checkbox,
    Input
}))));
