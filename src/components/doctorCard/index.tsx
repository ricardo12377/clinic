import { FC } from 'react';
import styles from './styles.module.scss';
import { DoctorCardType } from './props';
import { useAppDispatch } from '@app/hooks/hooks';
import { getAllConsults } from '@app/store/modules/clinic/thunks';

export const DoctorCard: FC<DoctorCardType> = ({ name, email, id }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.card}>
      <div>{name}</div>
      <div>{email}</div>
      <button>Filtrar consultas</button>
    </div>
  );
};
