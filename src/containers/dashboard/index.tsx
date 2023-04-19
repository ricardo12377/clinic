import { LayoutProvider } from '@app/components/layoutProvider';
import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import { DoctorCard } from '@app/components/doctorCard';
import { useAppDispatch, useAppSelector } from '@app/hooks/hooks';
import { getAllConsults, getAllUsers } from '@app/store/modules/clinic/thunks';
import { ConsultCard } from '@app/components/consultCard';
import Link from 'next/link';

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
        <nav className={styles.navigation}>
          <ul>
            <Link href="/registerdoctor" className={styles.link}>
              <li id="registerDoctor">Cadastrar Doutor</li>
            </Link>
            <Link href="/registerconsult" className={styles.link}>
              <li id="registerConsult">Cadastrar Consulta</li>
            </Link>
          </ul>
        </nav>

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
                  client={consult.client}
                />
              );
            })}
          </section>
        </div>
      </div>
    </LayoutProvider>
  );
};
