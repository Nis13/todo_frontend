import React from 'react';

interface btnProps {
  btnText: string;
  onClick?: () => void;
  btnSX?: React.CSSProperties;
  type: 'button' | 'reset' | 'submit' | undefined;
  isDisabled: boolean;
}

const Button = ({ btnText, btnSX, onClick, type, isDisabled }: btnProps) => {
  const DEFAULT_BTN_STYLES = {
    margin: '0.5rem',
    padding: '0.7rem 2.5rem',
    borderRadius: '2.5rem',
    border: 'none',
    fontSize: '1rem'
  };
  return (
    <button
      style={{ ...DEFAULT_BTN_STYLES, ...btnSX }}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {btnText}
    </button>
  );
};

export default Button;
