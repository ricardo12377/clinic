import { LayoutProvider } from '@app/components/layoutProvider';
import React, { FC } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@app/hooks/hooks';
import { createDoctor } from '@app/store/modules/clinic/thunks';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const RegisterDoctorCotainer: FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.clinic);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(createDoctor({ name: values.name, email: values.email }));

      resetForm();

      router.push('/');
    }
  });

  return (
    <LayoutProvider>
      <div className={styles.container} data-testid="testing">
        <form onSubmit={formik.handleSubmit}>
          <h1>Cadastrar Doutor</h1>
          <label htmlFor="name">Nome</label>
          <input
            name="name"
            onChange={formik.handleChange}
            type="text"
            data-testid="name"
          />

          <label htmlFor="email">Email</label>
          <input
            name="email"
            onChange={formik.handleChange}
            type="text"
            data-testid="email"
          />

          <div className={styles.groupButtons}>
            <Link href="/">
              <button>Voltar</button>
            </Link>

            <button type="submit" data-testid="button">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </LayoutProvider>
  );
};
