import React, { Component } from 'react';
import { TodoList } from 'components/TodoList';
import { Dropdown } from 'components/Dropdown';
import { Counter } from 'components/Counter';
import { ColorPicker } from 'components/ColorPicker';
import initialTodos from 'path/to/todos.json';
import colorPicker from 'path/to/colorPicker.json';

export class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        <h1>Task-1: Task list</h1>
        <div>
          <p>Count all: {totalTodoCount}</p>
          <p>Count completed: {completedTodoCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

        <h2>Task-2: Dropdown</h2>
        <Dropdown />

        <h2>Task-3: Counter</h2>
        <Counter initialValue={0} />

        <h2>Task-4: Color picker</h2>
        <ColorPicker options={colorPicker} />
      </>
    );
  }
}
