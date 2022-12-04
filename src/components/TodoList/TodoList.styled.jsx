import styled from 'styled-components';

export const List = styled('ul')({
  listStyle: 'none',
  width: '500px',
});

export const Task = styled('li')({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '25px',
  border: '1px solid black',
});

export const Text = styled('p')({
  fontSize: '25px',
});
