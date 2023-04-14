import { LayoutProvider } from '@app/components/layoutProvider';
import React, { FC, FormEvent, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { z } from 'zod';
import { useAppDispatch } from '@app/hooks/hooks';
import { api } from '@app/service/api';
import { createDoctor } from '@app/store/modules/clinic/thunks';

export const RegisterDoctorCotainer: FC = () => {
  const [state, setState] = useState({
    name: '',
    email: ''
  });

  const formRef = useRef<HTMLFormElement>(null);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(createDoctor({ name: state.name, email: state.email }));

    formRef.current?.reset();
  };

  return (
    <LayoutProvider>
      <div className={styles.container} data-testid="testing">
        <form onSubmit={handleSubmit} ref={formRef}>
          <h1>Cadastrar Doutor</h1>
          <label htmlFor="name">Nome</label>
          <input
            name="name"
            onChange={e => {
              console.log(e);
            }}
            type="text"
            data-testid="name"
          />

          <label htmlFor="email">Email</label>
          <input
            name="email"
            onChange={handleChange}
            type="text"
            data-testid="email"
          />

          <button type="submit" data-testid="button">
            Cadastrar
          </button>
        </form>
      </div>
    </LayoutProvider>
  );
};
