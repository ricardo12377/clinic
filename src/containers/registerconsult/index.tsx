import { LayoutProvider } from '@app/components/layoutProvider';
import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@app/hooks/hooks';
import { createConsult, getAllUsers } from '@app/store/modules/clinic/thunks';
import { useFormik } from 'formik';
import { schema } from './schema';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const RegisterConsultContainer: FC = () => {
  const dispatch = useAppDispatch();
  const doctors = useAppSelector(state => state.clinic.users);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      title: '',
      obs: '',
      client: '',
      doctorId: ''
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        createConsult({
          title: values.title,
          obs: values.obs,
          client: values.client,
          doctorId: values.doctorId
        })
      );

      resetForm();

      router.push('/');
    }
  });

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <LayoutProvider>
      <div className={styles.container} data-testid="testing">
        <form onSubmit={formik.handleSubmit}>
          <h1>Cadastrar Consulta</h1>
          <label htmlFor="title">Titulo</label>
          <input
            name="title"
            onChange={formik.handleChange}
            type="text"
            data-testid="title"
          />
          <p>{formik.errors.title}</p>

          <label htmlFor="obs">Obs:</label>
          <input
            name="obs"
            onChange={formik.handleChange}
            type="text"
            data-testid="obs"
          />

          <label htmlFor="client">Cliente:</label>
          <input
            name="client"
            onChange={formik.handleChange}
            type="text"
            data-testid="client"
          />
          <p>{formik.errors.client}</p>

          <label htmlFor="doctorId">Selecione o Dr:</label>
          <select
            name="doctorId"
            data-testid="doctorId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.doctorId}
          >
            <option>Selecione</option>;
            {doctors.map((doctor, index) => {
              return doctor.isActive ? (
                <option value={doctor.id} key={index + doctor.id}>
                  {doctor.name}
                </option>
              ) : null;
            })}
          </select>
          <p>{formik.errors.doctorId}</p>

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
