import { FC } from 'react';
import { LayoutProps } from './props';
import styles from './styles.module.scss';

export const LayoutProvider: FC<LayoutProps> = ({ children }) => {
  return <div className={styles.dark}>{children}</div>;
};
