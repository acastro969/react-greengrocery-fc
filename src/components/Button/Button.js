import './Button.scss';

const Button = ({ onClick, secondary, children }) => (
  <button
    className={`button ${secondary && 'button--secondary'}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;