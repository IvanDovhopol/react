import styled from 'styled-components';

export const Wrapper = styled('div')({
  width: '400px',
  padding: '10px',
  border: '1px solid black',
});

export const Option = styled('button')({
  display: 'inline-block',
  width: '50px',
  height: '50px',
  margin: '4px',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  transition: 'transform 250ms linear',

  ':active': {
    transform: 'scale(1.2)',
  },
});
