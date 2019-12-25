import * as React from 'react';
import classnames from 'classnames';
import Style from 'style-it';

import styles from './style.scss';

/**
 * Кнопка
 */
const Button = ({
    label,
    onClick,
    isDisabled,
    isSubmit,
    type = 'primary',
    size,
    ...props
}) => (
    <Style>
        {styles.toString()}
        <div>
            <button
                className={classnames('btn', `btn-${type}`, size ? `btn-${size}` : '')}
                onClick={onClick}
                disabled={isDisabled}
                type={isSubmit ? 'submit' : 'button'}
                {...props}
            >
                {label}
            </button>
        </div>
    </Style>
);

Button.featureFlagName = 'aeroexpressServiceCancelEnabled';
Button.isNewFeature = false;

export default Button;
