import * as React from 'react';
import classnames from 'classnames';

import './style.scss';

/**
 * Инпут
 */
const Input = ({
    label,
    placeholder,
    onChange,
    isDisabled,
    isRequired,
    size,
    labelSize,
    name = 'input',
    labelPosition,
    /** no-border для инпутов только с нижней границей */
    type = 'common',
    ...props
}) => {
    const getFormGroupClassName = () => classnames(
        's7-form-group',
        {
            's7-form-label-left': labelPosition === 'left',
            's7-form-group-req': isRequired && !label
        }
    );

    const getClassName = () => classnames(
        's7-form-control',
        {
            's7-form-control-lg': size === 'lg',
            's7-form-control-no-border': type === 'no-border'
        }
    );

    const getLabelClassName = () => classnames(
        's7-form-label',
        {
            's7-form-label-xl': labelSize === 'lg',
            's7-form-label-req': isRequired && label
        }
    );

    return (
        <div className={getFormGroupClassName()}>
            {label && (
                <label
                    htmlFor={name}
                    className={getLabelClassName()}
                >
                    {label}
                </label>
            )}
            <input
                className={getClassName()}
                placeholder={placeholder}
                onChange={onChange}
                disabled={isDisabled}
                name={name}
                {...props}
            />
        </div>
    );
};

export default Input;
