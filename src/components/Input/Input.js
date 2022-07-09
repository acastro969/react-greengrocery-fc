import { useField } from 'formik';
import * as S from './Input.styles.js';

const Input = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <S.Wrapper>
      <S.LabelWrapper>
        <label htmlFor=''>{label}</label>
        { props.required && <S.RequiredMark>*</S.RequiredMark> }
      </S.LabelWrapper>
      <S.Field type='text' {...field} {...props} />
      <S.Error>{meta.touched && meta.error}</S.Error>
    </S.Wrapper>
  );
}

export default Input;