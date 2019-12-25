import * as React from 'react';
import classnames from 'classnames';

import './style.scss';

/**
 * Радио
 */
const Radio = ({
    options,
    value,
    type,
    size,
    name = 'radio'
}) => {
    const [currentValue, setCurrentValue] = React.useState(value);

    const getCheckClassName = () => classnames('s7-form-check', {
        's7-form-check-inline': type === 'inline'
    });

    const getDescriptionClassName = () => classnames(
        's7-form-check-description',
        {
            's7-form-check-description-lg': size === 'lg'
        }
    );

    return (
        <div>
            {options && options.map(option => (
                <div className={getCheckClassName(option)} key={option.value}>
                    <label
                        className="s7-form-check-control s7-form-check-control-radio"
                    >
                        <input
                            type="radio"
                            checked={currentValue
                            && currentValue.value === option.value}
                            disabled={option.isDisabled}
                            onChange={() => setCurrentValue(option)}
                            className="s7-form-check-input"
                            name={name}
                        />
                        <span className="s7-form-check-indicator" />
                        <span className={getDescriptionClassName()}>{option.label}</span>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Radio;
