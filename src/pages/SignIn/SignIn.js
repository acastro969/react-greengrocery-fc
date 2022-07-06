import { Form, Formik } from 'formik';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import {
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  MSG_MUST_BE_VALID_EMAIL,
  MSG_PASSWORDS_MUST_MATCH,
  MSG_REQUIRED,
  MSG_VALUE_TOO_LONG,
  MSG_VALUE_TOO_SHORT,
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
    .min(USERNAME_MIN_LENGTH, MSG_VALUE_TOO_SHORT)
    .max(USERNAME_MAX_LENGTH, MSG_VALUE_TOO_LONG)
    .required(MSG_REQUIRED),
  email: Yup.string()
    .min(EMAIL_MIN_LENGTH, MSG_VALUE_TOO_SHORT)
    .max(EMAIL_MAX_LENGTH, MSG_VALUE_TOO_LONG)
    .email(MSG_MUST_BE_VALID_EMAIL)
    .required(MSG_REQUIRED),
  password: Yup.string()
    .min(EMAIL_MIN_LENGTH, MSG_VALUE_TOO_SHORT)
    .max(EMAIL_MAX_LENGTH, MSG_VALUE_TOO_LONG)
    .required(MSG_REQUIRED),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref('password'), null], MSG_PASSWORDS_MUST_MATCH)
    .required(MSG_REQUIRED),
});

const SignIn = () => {
  return (
    <div className='sign-in'>
      <Title>
        Sign in
      </Title>
      <Card>
        <Formik
          initialValues={initialState}
          validationSchema={SignInSchema}
          onSubmit={values => console.log(values)}
        >
          {formik => (
            <Form>
              <Input
                name='username'
                id='username'
                label='Username'
                type='text'
                required
                minLength={USERNAME_MIN_LENGTH}
                maxLength={USERNAME_MAX_LENGTH}
              />
              <Input
                name='email'
                id='email'
                label='E-Mail'
                type='email'
                required
                minLength={EMAIL_MIN_LENGTH}
                maxLength={EMAIL_MAX_LENGTH}
              />
              <Input
                name='password'
                id='password'
                label='Password'
                type='password'
                required
                minLength={PWD_MIN_LENGTH}
                maxLength={PWD_MAX_LENGTH}
              />
              <Input
                name='passwordRepeat'
                id='passwordRepeat'
                label='Repeat password'
                type='password'
                required
                minLength={PWD_MIN_LENGTH}
                maxLength={PWD_MAX_LENGTH}
              />
              <Button disabled={!formik.dirty || !formik.isValid}>Sign in</Button>
              <Button
                secondary
                onClick={() => {formik.setValues(initialState)}}
              >
                Clear
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default SignIn;