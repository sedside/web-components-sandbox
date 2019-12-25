import * as React from 'react';
import classnames from 'classnames';

import './style.scss';

/**
 * Чекбокс
 */
const Checkbox = ({
    options,
    values,
    type,
    size
}) => {
    const [currentValues, setCurrentValues] = React.useState(values);
    const isButton = type === 'button';

    const getCheckClassName = (option) => classnames({
        's7-form-check': !isButton,
        's7-form-check-inline': type === 'inline',
        's7-form-check-button': isButton,
        'ng-dirty': option.isInvalid,
        'ng-invalid': option.isInvalid
    });

    const getInputClassName = () => classnames({
        's7-form-check-button-input': isButton,
        's7-form-check-input': !isButton
    });

    const getLabelClassName = () => classnames({
        's7-form-check-control': !isButton,
        's7-form-check-control-checkbox': !isButton,
        's7-form-check-button-label': isButton
    });

    const getDescriptionClassName = () => classnames(
        's7-form-check-description',
        {
            's7-form-check-description-lg': size === 'lg'
        }
    );

    const getIndicatorClassName = () => classnames({
        's7-form-check-indicator': !isButton,
        's7-form-check-button-indicator': isButton
    });

    const onChangeValues = (option) => {
        if (option.isDisabled || option.isInvalid) {
            return;
        }

        if (!currentValues.some(value => value.value === option.value)) {
            const newValues = [...currentValues, { value: option.value, label: option.label }];
            setCurrentValues(newValues);
        } else {
            const newValues = currentValues.filter(value => value.value !== option.value);
            setCurrentValues(newValues);
        }
    };

    return (
        <div className="s7-form-group">
            {options && options.map(option => (
                <div className={getCheckClassName(option)} key={option.value}>
                    <label className={getLabelClassName()}>
                        <input
                            type="checkbox"
                            checked={currentValues
                            && currentValues.some(value => value.value === option.value)}
                            disabled={option.isDisabled}
                            onChange={() => onChangeValues(option)}
                            className={getInputClassName()}
                        />
                        <span className={getIndicatorClassName()}>
                            {isButton ? option.value : ''}
                        </span>
                        {option.label && !isButton
                        && <span className={getDescriptionClassName()}>{option.label}</span>}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Checkbox;
