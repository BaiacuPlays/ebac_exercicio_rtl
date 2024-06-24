import { render, screen, fireEvent } from '@testing-library/react';
import PostComments from './index';

test('inserts two comments', () => {
  render(<PostComments />);

  const input = screen.getByTestId('comment-input');
  const button = screen.getByTestId('submit-button');

  fireEvent.change(input, { target: { value: 'Primeiro comentario' } });
  fireEvent.click(button);

  fireEvent.change(input, { target: { value: 'Segundo comentario' } });
  fireEvent.click(button);

  const comments = screen.getAllByTestId('comment');

  expect(comments).toHaveLength(2);
  expect(comments[0]).toHaveTextContent('Primeiro comentario');
  expect(comments[1]).toHaveTextContent('Segundo comentario');
});