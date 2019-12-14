import React, { useState } from 'react';
import Link from './components/link/link';
import createWebComponent from './web-component-wrappers/create-web-component';

// import '@eastbanctechru/s7-ui-kit/sass/_mixins.scss';
// import '@eastbanctechru/s7-ui-kit/sass/_variables.scss';
// import styles from  '@eastbanctechru/s7-ui-kit/css/s7-ui-kit.css';

// import './style.less';

createWebComponent(Link, 'custom-link', ['name', 'onClick', 'foo']);

const App = () => {
    const [name, setName] = useState('asd');

    const onNameChange = () => {
        setName(Math.random());
    };

    return (
        <div>
            <div className="btn btn-primary" onClick={onNameChange}>Change name</div>
            <custom-link name={name} onClick={() => console.log(222)} foo="bar" />
        </div>
    );
};

export default App;
