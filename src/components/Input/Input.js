import { useField } from 'formik';
import Label from '../Label/Label';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import * as S from './Input.styles.js';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <S.Wrapper>
      <S.LabelWrapper>
        <Label htmlFor={props.id}>{label}</Label>
        { props.required && <S.RequiredMark>*</S.RequiredMark> }
      </S.LabelWrapper>
      <S.Field type='text' {...field} {...props} />
      <ErrorMessage>{meta.touched && meta.error}</ErrorMessage>
    </S.Wrapper>
  );
}

export default Input;