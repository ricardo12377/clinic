import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('O campo nome é obrigatório.'),
  email: yup.string().required('O campo email é obrigatório.')
});
