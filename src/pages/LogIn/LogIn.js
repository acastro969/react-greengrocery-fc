import { Form, Formik } from 'formik';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import {
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  MSG_MUST_BE_VALID_EMAIL,
  PWD_MAX_LENGTH,
  PWD_MIN_LENGTH,
  MSG_VALUE_TOO_LONG,
  MSG_VALUE_TOO_SHORT,
  MSG_REQUIRED,
} from '../../utils/Constants';
import * as Yup from 'yup';
import './LogIn.scss';

const initialState = {
  email: '',
  password: ''
}

const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .min(EMAIL_MIN_LENGTH, MSG_VALUE_TOO_SHORT)
    .max(EMAIL_MAX_LENGTH, MSG_VALUE_TOO_LONG)
    .email(MSG_MUST_BE_VALID_EMAIL)
    .required(MSG_REQUIRED),
  password: Yup.string()
    .min(PWD_MIN_LENGTH, MSG_VALUE_TOO_SHORT)
    .max(PWD_MAX_LENGTH, MSG_VALUE_TOO_LONG)
    .required(MSG_REQUIRED),
});

const LogIn = () => {
  return (
    <div className='log-in'>
      <Title>
        Log in
      </Title>
      <Card>
        <Formik
          initialValues={initialState}
          validationSchema={LogInSchema}
          onSubmit={values => console.log(values)}
        >
          {(formik) => (
            <Form>
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
              <Button disabled={!formik.dirty || !formik.isValid}>Log in</Button>
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

export default LogIn;