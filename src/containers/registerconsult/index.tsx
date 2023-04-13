import { LayoutProvider } from '@app/components/layoutProvider';
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch } from '@app/hooks/hooks';
import { createConsult } from '@app/store/modules/clinic/thunks';

export const RegisterConsultContainer: FC = () => {
  const [state, setState] = useState({
    title: '',
    obs: '',
    client: '',
    doctorId: ''
  });

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (
    e: any | React.ChangeEventHandler<HTMLSelectElement>
  ) => {
    createConsult({
      title: state.title,
      obs: state.obs,
      client: state.client,
      doctorId: state.doctorId
    });

    e.target.reset();
  };

  return (
    <LayoutProvider>
      <div className={styles.container} data-testid="testing">
        <form onSubmit={handleSubmit}>
          <h1>Cadastrar Doutor</h1>
          <label htmlFor="title">Titulo</label>
          <input
            name="title"
            onChange={handleChange}
            type="text"
            data-testid="title"
          />

          <label htmlFor="obs">Obs:</label>
          <input
            name="obs"
            onChange={handleChange}
            type="text"
            data-testid="obs"
          />

          <label htmlFor="client">Cliente:</label>
          <input
            name="client"
            onChange={handleChange}
            type="text"
            data-testid="client"
          />

          <label htmlFor="doctorId">Selecione o Dr.:</label>
          <select
            name="doctorId"
            data-testid="doctorId"
            onChange={e => {
              setState({ ...state, doctorId: e.target.value });
            }}
          >
            <option value="12sds2s" selected>
              Dr Ricardo
            </option>
            <option value="12sds22sksjs">Dr Souza</option>
          </select>

          <button type="submit" data-testid="button">
            Cadastrar
          </button>
        </form>
      </div>
    </LayoutProvider>
  );
};
