import { LayoutProvider } from '@app/components/layoutProvider';
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import { z } from 'zod';
import { useAppDispatch } from '@app/hooks/hooks';
import { api } from '@app/service/api';

export const RegisterDoctorCotainer: FC = () => {
  const [state, setState] = useState({
    name: '',
    email: ''
  });

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    api.post('/api/user/', {
      name: state.name,
      email: state.email
    });
  };

  return (
    <LayoutProvider>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h1>Cadastrar Doutor</h1>
          <label htmlFor="name">Nome</label>
          <input name="name" onChange={handleChange} />

          <label htmlFor="email">Email</label>
          <input name="email" onChange={handleChange} />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </LayoutProvider>
  );
};
