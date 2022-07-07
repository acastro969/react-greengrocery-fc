import { useField } from 'formik';
import './Checkbox.scss';

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({...props, type: 'checkbox'})

  return (
    <div className='checkbox'>
      <input type='checkbox' {...field} {...props} />
      <label className='checkbox__label' htmlFor={field.name}>{children}</label>
      <p className='checkbox__error'>{meta.touched && meta.error}</p>
    </div>
  )
};

export default Checkbox;