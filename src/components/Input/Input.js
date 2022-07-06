import { useField } from 'formik';
import './Input.scss';

const Input = ({label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <div className='input'>
      <span className='input__label'>
        <label htmlFor=''>{label}</label>
        { props.required && <b className='input__required-indicator'>*</b> }
      </span>
      <input className='input__field' type='text' {...field} {...props} />
      <p className='input__error'>{meta.touched && meta.error}</p>
    </div>
  );
}

export default Input;