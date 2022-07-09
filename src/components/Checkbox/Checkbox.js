import { useField } from 'formik';
import * as S from './Checkbox.styles';

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({...props, type: 'checkbox'})

  return (
    <S.Wrapper>
      <input type='checkbox' {...field} {...props} />
      <S.Label htmlFor={field.name}>{children}</S.Label>
      <S.Error>{meta.touched && meta.error}</S.Error>
    </S.Wrapper>
  )
};

export default Checkbox;