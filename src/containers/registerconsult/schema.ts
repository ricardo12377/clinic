import * as yup from 'yup';

export const schema = yup.object().shape({
  title: yup.string().required('O campo título é obrigatório.'),
  obs: yup.string(),
  client: yup.string().required('O campo de cliente é obrigatório.'),
  doctorId: yup.string().required('O campo de Dr é obrigatório.')
});
