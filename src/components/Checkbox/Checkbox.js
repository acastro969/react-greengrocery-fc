import { useField } from 'formik';
import Label from '../Label/Label';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import * as S from './Checkbox.styles';

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({...props, type: 'checkbox'})

  return (
    <S.Wrapper>
      <input type='checkbox' {...field} {...props} />
      <Label htmlFor={field.name}>{children}</Label>
      <ErrorMessage>{meta.touched && meta.error}</ErrorMessage>
    </S.Wrapper>
  )
};

export default Checkbox;