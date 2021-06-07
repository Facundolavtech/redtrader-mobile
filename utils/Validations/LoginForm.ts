interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginFormValidations(values: LoginFormValues) {
  const { email, password } = values;
  let errors: any = {};

  if (!email) {
    errors.email = "Este campo es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Formato de email no valido";
  }

  if (!password) {
    errors.password = "Este campo es obligatorio";
  }

  return errors;
}
