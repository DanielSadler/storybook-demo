import { Button } from '@/components/Atoms/Button/Button';
import { TextInput } from '@/components/Atoms/TextInput/TextInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  const { handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: () => {},
  });

  console.log(touched);
  return (
    <div className="space-y-8 border border-black p-8 rounded-md flex justify-center flex-col">
      <div className="space-y-8">
        <TextInput
          label="Email"
          data-testid="email"
          onChange={handleChange}
          id="email"
          error={
            (touched.email || touched.password) && errors.email
              ? errors.email
              : ''
          }
          type="email"
        />
        <TextInput
          label="Password"
          data-testid="password"
          onChange={handleChange}
          id="password"
          error={
            (touched.email || touched.password) && errors.password
              ? errors.password
              : ''
          }
          type="password"
        />
      </div>
      <Button label="Log in" primary={true} onClick={handleSubmit} />
    </div>
  );
};
