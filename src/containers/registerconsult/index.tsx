import { LayoutProvider } from '@app/components/layoutProvider';
import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '@app/hooks/hooks';
import { createConsult, getAllUsers } from '@app/store/modules/clinic/thunks';

export const RegisterConsultContainer: FC = () => {
  const [state, setState] = useState({
    title: '',
    obs: '',
    client: '',
    doctorId: ''
  });

  const formRef = useRef<HTMLFormElement>(null);

  const dispatch = useAppDispatch();
  const doctors = useAppSelector(state => state.clinic.users);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(
      createConsult({
        title: state.title,
        obs: state.obs,
        client: state.client,
        doctorId: state.doctorId
      })
    );

    formRef.current?.reset();
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <LayoutProvider>
      <div className={styles.container} data-testid="testing">
        <form onSubmit={handleSubmit} ref={formRef}>
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

          <label htmlFor="doctorId">Selecione o Dr:</label>
          <select
            name="doctorId"
            data-testid="doctorId"
            onChange={e => {
              setState({ ...state, doctorId: e.target.value });
            }}
          >
            {doctors.map((doctor, index) => {
              return doctor.isActive ? (
                <option value={doctor.id} key={index + doctor.id}>
                  {doctor.name}
                </option>
              ) : null;
            })}
          </select>

          <button type="submit" data-testid="button">
            Cadastrar
          </button>
        </form>
      </div>
    </LayoutProvider>
  );
};
