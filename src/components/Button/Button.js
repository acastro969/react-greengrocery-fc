import './Button.scss';

const Button = ({ onClick, secondary, children, disabled }) => (
  <button
    className={`button ${secondary && 'button--secondary'} ${disabled && 'button--disabled'}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;