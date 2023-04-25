import { FC } from 'react';
import styles from './styles.module.scss';
import { DoctorCardType } from './props';
import { useAppDispatch } from '@app/hooks/hooks';
export const DoctorCard: FC<DoctorCardType> = ({ name, email, id }) => {
  return (
    <div className={styles.card} id="doctorCard">
      <div>{name}</div>
      <div>{email}</div>
      <button>Filtrar consultas</button>
    </div>
  );
};
