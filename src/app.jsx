import React, { useState } from 'react';
import Checkbox from './components/checkbox/checkbox';
import Radio from './components/radio/radio';
// import createWebComponent from './web-component-wrappers/create-web-component';

// import '@eastbanctechru/s7-ui-kit/sass/_mixins.scss';
// import '@eastbanctechru/s7-ui-kit/sass/_variables.scss';
// import styles from  '@eastbanctechru/s7-ui-kit/css/s7-ui-kit.css';

// import './style.sass';

import './styles/fonts.scss';

const App = () => {
    const [name, setName] = useState('asd');

    const onNameChange = () => {
        setName(Math.random());
    };

    const OPTIONS = [
        {
            label: 'Опция 1',
            value: 1
        },
        {
            label: 'Опция 2',
            value: 2
        },
        {
            label: 'Опция 3',
            value: 3,
            isDisabled: true
        },
        {
            label: 'Опция 4',
            value: 4,
            isDisabled: true
        }
    ];

    const VALUES = [
        {
            label: 'Опция 1',
            value: 1
        },
        {
            label: 'Опция 3',
            value: 3,
            isDisabled: true
        },
    ];

    const VALUE = {
        label: 'Опция 2',
        value: 2
    };

    return (
        <div>
            <div className="btn btn-primary" onClick={onNameChange}>Change name</div>
            <div>
                <Checkbox
                    options={OPTIONS}
                    values={VALUES}
                />
                <Checkbox
                    type="inline"
                    options={OPTIONS}
                    values={VALUES}
                />
                <Checkbox
                    options={OPTIONS}
                    values={VALUES}
                    size="lg"
                />
                <Checkbox
                    options={OPTIONS}
                    values={VALUES}
                    type="inline"
                    size="lg"
                />
                <Checkbox
                    options={OPTIONS}
                    values={VALUES}
                    type="button"
                />
            </div>
            <div>
                <Radio
                    options={OPTIONS}
                    value={VALUE}
                    name="1"
                />
                <Radio
                    type="inline"
                    options={OPTIONS}
                    value={VALUE}
                    name="2"
                />
                <Radio
                    options={OPTIONS}
                    value={VALUE}
                    size="lg"
                    name="3"
                />
                <Radio
                    options={OPTIONS}
                    value={VALUE}
                    type="inline"
                    size="lg"
                    name="4"
                />
                <Radio
                    options={[{ value: 1 }, { value: 2 }]}
                />
            </div>
        </div>
    );
};

export default App;
