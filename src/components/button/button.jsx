import * as React from 'react';
import Style from 'style-it';
import classnames from 'classnames';

import styles from './style.scss';

/**
 * Кнопка
 */
const Button = ({
    label,
    onClick,
    isDisabled,
    isSubmit,
    className,
    type = 'primary',
    size,
    ...props
}) => (
    <Style>
        {styles.toString()}
        <div>
            <button
                className={classnames(className, 'btn', `btn-${type}`, size ? `btn-${size}` : '')}
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

export default Button;
