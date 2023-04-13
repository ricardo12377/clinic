import store from '@app/store/store';
import { Provider } from 'react-redux';

export const WithProviders = ({ children }: { children: JSX.Element }) => {
  return <Provider store={store}>{children}</Provider>;
};
