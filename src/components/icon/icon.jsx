import * as React from 'react';

import icons from './icons.svg';

import './style.scss';

const Icon = ({ icon }) => {
    return (
        <svg className="icon">
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`/icons.svg#${icon}`} />
        </svg>
    );
};

export default Icon;
