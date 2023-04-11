import { LayoutProvider } from '@app/components/layoutProvider';
import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import { DoctorCard } from '@app/components/doctorCard';
import { useAppDispatch, useAppSelector } from '@app/hooks/hooks';
import { getAllConsults, getAllUsers } from '@app/store/modules/clinic/thunks';
import { ConsultCard } from '@app/components/consultCard';

export const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.clinic);

  useEffect(() => {
    dispatch(getAllConsults());
    dispatch(getAllUsers());
  }, []);

  return (
    <LayoutProvider>
      <div className={styles.container}>
        <nav className={styles.navigation}>something here</nav>

        <div className={styles.content}>
          <aside className={styles.menu}>
            {data.users.map((user, index) => {
              return (
                <DoctorCard
                  name={user.name}
                  email={user.email}
                  id={user.id}
                  key={user.email + index}
                />
              );
            })}
          </aside>
          <section className={styles.list}>
            {data.consults.map((consult, index) => {
              return (
                <ConsultCard
                  key={index + consult.id + consult.doctorId}
                  id={consult.id}
                  doctorId={consult.doctorId}
                  title={consult.title}
                  obs={consult.obs}
                />
              );
            })}
          </section>
        </div>
      </div>
    </LayoutProvider>
  );
};
