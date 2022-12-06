import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { List, Task, Text } from './TodoList.styled';
import { Btn } from 'components/App/App.styled';

export class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        task: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };

  render() {
    const { todos, onDeleteTodo } = this.props;

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
  }
}
