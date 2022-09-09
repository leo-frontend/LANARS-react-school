import React from 'react';
import cls from './input.module.scss';
import classNames from 'classnames';

const Input = (props) => {
  const { id, className, onChange, value, error = '', label, disabled = false, ...attrs } = props;

  const classes = classNames(
    cls.inputUI,
    className,
    { [cls.inputError]: !!error },
    { [cls.inputDisabled]: disabled },
  );

  return (
    <div className={cls.wrapper}>
      {
        label && <label className={cls.inputLabel} htmlFor={id}>{label}</label>
      }
      <input
        className={classes}
        onChange={onChange}
        value={value}
        disabled={disabled}
        id={id}
        {...attrs}/>
      {
        error && <span className={cls.errorMessage}>{error}</span>
      }
    </div>

  );
};

export default Input;
