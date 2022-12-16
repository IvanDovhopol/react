// import { Btn } from 'components/App/App.styled';
import { Text } from 'components/TodoList/TodoList.styled';
import { IconButton } from 'components/IconButton';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';

export const Todo = ({ text, completed, onChange, onClick }) => (
  <>
    <input type="checkbox" checked={completed} onChange={onChange} />
    <Text>{text}</Text>

    <IconButton type="button" onClick={onClick}>
      <CloseIcon width="50" height="50" fill="#fff" />
    </IconButton>
  </>
);
