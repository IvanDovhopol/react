import styled from 'styled-components';

export const Card = styled.div`
  border: 2px solid #2a2a2a;
  padding: 8px;
  width: 140px;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    border-style: dashed;
  }
`;

export const Img = styled('img')({
  display: 'block',
  width: '100%',
});

export const Label = styled('p')({
  fontSize: '18px',
  marginBottom: 0,
  textAlign: 'center',
  color: '#2a2a2a',
});
