import React from 'react';
import PropType from 'prop-types';
import classNames from 'classnames';

const Button = ({ outline, children, className }) => {
  return (
    <button
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
