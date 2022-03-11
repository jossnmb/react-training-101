const inputs = [
  {
    id: 1,
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special characters!",
    label: 'Username',
    pattern: '^[A-Za-z0-9]{3,16}$',
    required: true,
  },
  {
    id: 2,
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    errorMessage: 'Email address is not valid!',
    label: 'Email',
    required: true,
  },
  {
    id: 3,
    name: 'birthday',
    type: 'date',
    placeholder: 'Birthday',
    label: 'Birthday',
  },
  {
    id: 4,
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    errorMessage:
      'Password must be at least 8 characters and include at least one lowercase letter, uppercase letter, number, and special character!',
    label: 'Password',
    pattern:
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[!@#$%^&*()_+])[A-Za-zd!@#$%^&*()_+]{8,}$',
    required: true,
  },
  {
    id: 5,
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Confirm Password',
    errorMessage: 'Passwords do not match!',
    label: 'Confirm Password',
    pattern: values.password,
    required: true,
  },
];

export default inputs;
