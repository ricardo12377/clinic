import { FC } from 'react';
import styles from './styles.module.scss';

export interface ConsultCardProps {
  id: string;
  doctorId: string;
  obs?: string;
  title: string;
}

export const ConsultCard: FC<ConsultCardProps> = ({ obs, title }) => {
  return (
    <div className={styles.consultCard}>
      <div>{title}</div>
      <div>{obs}</div>
    </div>
  );
};
