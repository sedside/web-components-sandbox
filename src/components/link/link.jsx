import React, { useState } from 'react';
import Style from 'style-it';

import styles from './style.scss';

/**
 * Link
 */
const Link = ({ name, onClick, foo }) => {
    const [internalState, setInternalState] = useState(1);
    const [isOpen, toggleOpen] = useState(true);

    console.log('link', 'Link', name, foo);

    return (
        <Style>
            {styles.toString()}
            <div>
                <button className="btn btn-primary" type="button">{name}</button>
                <div>{internalState}</div>
                <div onClick={() => setInternalState(internalState + 1)}>Change internal state</div>
                <div onClick={() => toggleOpen(!isOpen)}>Toggle</div>
                {isOpen && (<div>Hidden part</div>)}
                <input onChange={(event) => console.log(event.target.value)} />
            </div>
        </Style>
    );
};

export default Link;
