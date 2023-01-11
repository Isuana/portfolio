import Form from "./form";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";

beforeEach(() => {
  cleanup;
  render(<Form />);
});


test('check if the name is not a number', async () => {
  fireEvent.change(screen.getByAltText('name'), {
    target: { value: '123' }
  });

  fireEvent.change(screen.getByAltText('surname'), {
    target: { value: 'nazwisko' }
  });

  fireEvent.click(screen.getByText('Wyślij'));

  expect(screen.getByText('Imię i nazwisko nie może zawierać cyfr!')).toBeTruthy();
});

test('check if the name is not a number', async () => {
  fireEvent.change(screen.getByAltText('name'), {
    target: { value: 'o123x' }
  });

  fireEvent.change(screen.getByAltText('surname'), {
    target: { value: 'n4zw1sko' }
  });

  fireEvent.click(screen.getByText('Wyślij'));

  expect(screen.getByText('Imię i nazwisko nie może zawierać cyfr!')).toBeTruthy();
});

test('check whether two fields have been filled in and displays an alert', async () => {
  fireEvent.click(screen.getByText('Wyślij'));

  expect(screen.getByText('Imię i nazwisko jest wymagane!')).toBeTruthy();
});

test('check if one field has not been completed and displays an alert', async () => {
  fireEvent.change(screen.getByAltText('name'), {
    target: { value: 'Anna' }
  });

  fireEvent.click(screen.getByText('Wyślij'));

  expect(screen.getByText('Imię i nazwisko jest wymagane!')).toBeTruthy();
});
