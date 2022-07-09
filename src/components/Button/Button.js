import * as S from './Button.styles';

const Button = ({ onClick, secondary, children, disabled }) => (
  <S.Button
    secondary={secondary}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </S.Button>
);

export default Button;