import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WithProviders } from '@hooks/withProviders';
import { RegisterConsultContainer } from '@app/containers/registerconsult';

describe('Register doctor page', () => {
  it('render a register doctor container', () => {
    render(
      <WithProviders>
        <RegisterConsultContainer key={2} />
      </WithProviders>
    );

    const heading = screen.getByTestId('testing');

    expect(heading).toBeInTheDocument();
  });

  it('render a form fields', () => {
    render(
      <WithProviders>
        <RegisterConsultContainer key={4} />
      </WithProviders>
    );

    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('obs')).toBeInTheDocument();
    expect(screen.getByTestId('client')).toBeInTheDocument();
    expect(screen.getByTestId('doctorId')).toBeInTheDocument();
  });

  it('render a fire event submit function', () => {
    render(
      <WithProviders>
        <RegisterConsultContainer key={4} />
      </WithProviders>
    );

    const titleInput = screen.getByTestId('title');
    const obsInput = screen.getByTestId('obs');
    const clientInput = screen.getByTestId('client');
    const doctorIdInput = screen.getByTestId('doctorId');
    const buttonInput = screen.getByTestId('button');

    fireEvent.change(titleInput, { target: { value: 'Consulta urgente' } });
    fireEvent.change(obsInput, { target: { value: 'paciente idoso' } });
    fireEvent.change(clientInput, { target: { value: 'John Doe' } });
    fireEvent.change(doctorIdInput, {
      target: { value: '102922' }
    });
    fireEvent.click(buttonInput);

    expect(titleInput).toHaveValue('');
    expect(obsInput).toHaveValue('');
    expect(clientInput).toHaveValue('');
  });
});
