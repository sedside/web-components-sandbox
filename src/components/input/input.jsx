import * as React from 'react';
import Style from 'style-it';
import classnames from 'classnames';

import styles from './style.scss';

/**
 * Инпут
 */
const Input = ({
    label,
    placeholder,
    onChange,
    isDisabled,
    isRequired,
    isFloatingLabel,
    className,
    size,
    name = 'input',
    /** no-border для инпутов только с нижней границей */
    type = 'common',
    ...props
}) => (
    <Style>
        {styles.toString()}
        <div className="s7-form-group">
            {label && (
                <label
                    htmlFor={name}
                    className="s7-form-label"
                >
                    {label}
                </label>
            )}
            <input
                className="s7-form-control s7-form-control-lg"
                placeholder={placeholder}
                onChange={onChange}
                disabled={isDisabled}
                name={name}
                {...props}
            />
        </div>
    </Style>
);

export default Input;
