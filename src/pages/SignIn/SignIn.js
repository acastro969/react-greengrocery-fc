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
  USERNAME_MAX_LENGTH,
  USERNAME_MIN_LENGTH
} from '../../utils/Constants';
import * as Yup from 'yup';
import './SignIn.scss';

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordRepeat: ''
}

const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .min(USERNAME_MIN_LENGTH, 'The username is too short')
    .max(USERNAME_MAX_LENGTH, 'The username is too long')
    .required('The field is required'),
  email: Yup.string()
    .min(EMAIL_MIN_LENGTH, 'The email is too short')
    .max(EMAIL_MAX_LENGTH, 'The email is too long')
    .required('The field is required'),
  password: Yup.string()
    .min(EMAIL_MIN_LENGTH, 'The password is too short')
    .max(EMAIL_MAX_LENGTH, 'The password is too long')
    .required('The field is required'),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('The field is required'),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: SignInSchema,
    validateOnMount: true,
    onSubmit: values => console.log(values)
  });

  return (
    <div className='sign-in'>
      <Title>
        Sign in
      </Title>
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <Input
            id='username'
            label='Username'
            type='text'
            required
            minLength={USERNAME_MIN_LENGTH}
            maxLength={USERNAME_MAX_LENGTH}
            { ...formik.getFieldProps('username') }
            error={formik.touched.username && formik.errors.username}
          />
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
          <Input
            id='passwordRepeat'
            label='Repeat password'
            type='password'
            required
            minLength={PWD_MIN_LENGTH}
            maxLength={PWD_MAX_LENGTH}
            { ...formik.getFieldProps('passwordRepeat') }
            error={formik.touched.passwordRepeat && formik.errors.passwordRepeat}
          />
          <Button disabled={!formik.isValid}>Sign in</Button>
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

export default SignIn;