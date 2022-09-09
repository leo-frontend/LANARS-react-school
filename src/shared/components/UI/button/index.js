import React from 'react';
import cls from './button.module.scss';
import classNames from 'classnames';

const Button = (props) => {
  const { children, className, variant = 'contained', onClick, disabled = false, ...attrs } = props;

  const classes = classNames(
    cls.button,
    { [cls.btnVariantText]: variant === 'text' },
    { [cls.btnVariantOutlined]: variant === 'outlined' },
    { [cls.btnVariantContained]: variant === 'contained' },
    className,
    { [cls.btnDisabled]: disabled },
  );

  return (
    <button
      disabled={disabled}
      className={classes}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default Button;
