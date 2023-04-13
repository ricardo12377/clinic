import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RegisterDoctorCotainer } from '@app/containers/registercoctor';
import { WithProviders } from '@hooks/withProviders';

describe('Register doctor page', () => {
  it('render a register doctor container', () => {
    render(
      <WithProviders>
        <RegisterDoctorCotainer key={2} />
      </WithProviders>
    );

    const heading = screen.getByTestId('testing');

    expect(heading).toBeInTheDocument();
  });

  it('render a form fields', () => {
    render(
      <WithProviders>
        <RegisterDoctorCotainer key={4} />
      </WithProviders>
    );

    expect(screen.getByTestId('name')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('render a fire event submit function', () => {
    render(
      <WithProviders>
        <RegisterDoctorCotainer key={4} />
      </WithProviders>
    );

    const nameInput = screen.getByTestId('name');
    const emailInput = screen.getByTestId('email');
    const buttonInput = screen.getByTestId('button');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.click(buttonInput);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
  });
});
