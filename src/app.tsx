// @ts-nocheck

import React from 'react';
import Button from './components/Button/Button';
import TestComponent from './components/TestComponent/TestComponent';
import { ThemeContext } from './hooks/use-theme';

const App = () => (<>
    <ThemeContext.Provider value='common'>
        <TestComponent />
    </ThemeContext.Provider>
    <ThemeContext.Provider value='redClient'>
        <TestComponent />
    </ThemeContext.Provider>
    <ThemeContext.Provider value='greenClient'>
        <TestComponent />
    </ThemeContext.Provider>
    <ThemeContext.Provider value='blueClient'>
        <TestComponent />
    </ThemeContext.Provider>
    <ThemeContext.Provider value='blackClient'>
        <TestComponent />
    </ThemeContext.Provider>
</>);

export default App;
