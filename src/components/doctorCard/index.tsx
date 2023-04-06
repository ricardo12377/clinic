import { FC } from 'react';
import styles from './styles.module.scss';
import { DoctorCardType } from './props';

export const DoctorCard: FC<DoctorCardType> = ({ name, email, id }) => {
  return (
    <div className={styles.card}>
      <div>{name}</div>
      <div>{email}</div>
      <button>Filtrar consultas</button>
    </div>
  );
};
