import './Input.scss';

const Input = ({label, ...props}) => {
  return (
    <div className='input'>
      <span className='input__label'>
        <label htmlFor=''>{label}</label>
        { props.required && <b className='input__required-indicator'>*</b> }
      </span>
      <input className='input__field' type='text' {...props} />
      <p className='input__error'>{props.error}</p>
    </div>
  );
}

export default Input;