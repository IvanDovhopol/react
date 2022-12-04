import styled from 'styled-components';

export const Btn = styled('button')({
  display: 'block',
  padding: '20px 40px',
  backgroundColor: 'blue',
  color: '#fff',
  borderRadius: '10px',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: 'red',
  },
});
