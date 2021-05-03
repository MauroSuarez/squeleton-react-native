import React from 'react';
import { fireEvent, render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from "react-dom/test-utils";
import Login from '../../../../reactnativeweb-demo/src/features/login';

describe('<Login />', () => {
  it('renders correctly username', () => {
    const text_username = 'Usuario';
    const text_passowrd = 'Password';
    const text_button = 'Ingresar';
    const {getByText}  = render(<Login />);

    expect(getByText(text_username)).toBeInTheDocument();
    expect(getByText(text_passowrd)).toBeInTheDocument();
    expect(getByText(text_button)).toBeInTheDocument();
  });
});

describe("Form behaviour Login",  () => {
  it('validate create token session storage', async () => {
    const { getByTestId } = render(<Login/>);

    await act (async () => {
      fireEvent.submit(getByTestId('sumbitLogin'))
    });

    expect(window.sessionStorage.getItem('token')).toBeNull();
  });
});

describe("Enter max value for input password",  () => {
  it('Change value input password', async () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'admin' } })

    expect(input.value).toEqual('admin')
  });
});

const setup = () => {
  const utils = render(<Login />)
  const input = utils.getByTestId('test-password')
  return {
    input,
    ...utils,
  }
}