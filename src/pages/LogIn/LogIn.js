import { useFormik } from 'formik';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import {
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  PWD_MAX_LENGTH,
  PWD_MIN_LENGTH,
} from '../../utils/Constants';
import * as Yup from 'yup';
import './LogIn.scss';

const initialState = {
  email: '',
  password: ''
}

const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .min(EMAIL_MIN_LENGTH, 'The email is too short')
    .max(EMAIL_MAX_LENGTH, 'The email is too long')
    .required('The field is required'),
  password: Yup.string()
    .min(EMAIL_MIN_LENGTH, 'The password is too short')
    .max(EMAIL_MAX_LENGTH, 'The password is too long')
    .required('The field is required'),
});

const LogIn = () => {
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: LogInSchema,
    validateOnMount: true,
    onSubmit: values => console.log(values)
  });

  return (
    <div className='log-in'>
      <Title>
        Log in
      </Title>
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <Input
            id='email'
            label='E-Mail'
            type='email'
            required
            minLength={EMAIL_MIN_LENGTH}
            maxLength={EMAIL_MAX_LENGTH}
            { ...formik.getFieldProps('email') }
            error={formik.touched.email && formik.errors.email}
          />
          <Input
            id='password'
            label='Password'
            type='password'
            required
            minLength={PWD_MIN_LENGTH}
            maxLength={PWD_MAX_LENGTH}
            { ...formik.getFieldProps('password') }
            error={formik.touched.password && formik.errors.password}
          />
          <Button disabled={!formik.isValid}>Log in</Button>
          <Button
            secondary
            onClick={() => {formik.setValues(initialState)}}
          >
            Clear
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default LogIn;