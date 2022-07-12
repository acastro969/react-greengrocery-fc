import * as S from './Label.styles.js';

const Label = ({ children, ...props }) => (
  <S.Label {...props}>{children}</S.Label>
);

export default Label;