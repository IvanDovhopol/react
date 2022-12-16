// import PropTypes from 'prop-types';
import { StyledButton } from './IconButton.styled';

export const IconButton = ({ children, onClick, ...allyProps }) => (
  <StyledButton type="button" onClick={onClick} {...allyProps}>
    {children}
  </StyledButton>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
