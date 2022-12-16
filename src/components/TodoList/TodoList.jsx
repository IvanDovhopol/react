import PropTypes from 'prop-types';

import { List, Task } from './TodoList.styled';
import { Todo } from 'components/Todo/Todo';

export const TodoList = ({ todos, onDelete, onToggleCompleted }) => {
  return (
    <List>
      {todos.map(({ id, text, completed }) => (
        <Task key={id}>
          <Todo
            onChange={() => onToggleCompleted(id)}
            onClick={() => onDelete(id)}
            text={text}
            completed={completed}
          />
        </Task>
      ))}
    </List>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
