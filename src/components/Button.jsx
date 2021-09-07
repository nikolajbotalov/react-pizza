import React from 'react';
import PropType from 'prop-types';
import classNames from 'classnames';

const Button = ({ onClick, outline, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
};

Button.protoType = {
  onClick: PropType.func,
};

export default Button;
