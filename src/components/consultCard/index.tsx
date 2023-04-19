import { FC } from 'react';
import styles from './styles.module.scss';
import { ConsultCardProps } from './props';

export const ConsultCard: FC<ConsultCardProps> = ({ obs, title, client }) => {
  return (
    <div className={styles.consultCard} data-testid="consult-card">
      <button>Excluir</button>
      <div className={styles.client}>{client}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.obs}>{obs}</div>
    </div>
  );
};
