import { List, Task, Text } from './TodoList.styled';
import { Btn } from 'components/App/App.styled';

export const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <List>
      {todos.map(({ id, task }) => (
        <Task key={id}>
          <Text>{task}</Text>
          <Btn type="button" onClick={() => onDeleteTodo(id)}>
            Delete
          </Btn>
        </Task>
      ))}
    </List>
  );
};
