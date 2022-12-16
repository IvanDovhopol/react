import React, { Component } from 'react';
import { TodoList } from 'components/TodoList';
import axios from 'axios';
import { Dropdown } from 'components/Dropdown';
import { Counter } from 'components/Counter';
import { ColorPicker } from 'components/ColorPicker';
import { StickerList } from 'components/StickerList';
import { LoginForm } from 'components/Form/LoginForm/LoginForm';
import { SignUpForm } from 'components/Form/SignUpForm/SignUpForm';
import { TodoEditor } from 'components/TodoEditor';
import { Filter } from 'components/TodoEditor/Filter';
import { Form } from 'components/Form/Nanoid/Form-nanoid';
import colorPicker from 'path/to/colorPicker.json';
import stickers from 'path/to/stickers.json';
import initialTodos from 'path/to/todos.json';
import { nanoid } from 'nanoid';
import { Modal } from 'components/Modal';
import { Clock } from 'components/Clock';
import { IconButton } from 'components/IconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';

const STORAGE_KEY = 'todos';

export class App extends Component {
  static defaultProps = {
    initialStickers: [],
  };

  state = {
    todos: initialTodos,
    filter: '',
    showModal: false,
    stickers: this.props.initialStickers,
  };

  async componentDidMount() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

    data && this.setState({ todos: data });

    const response = await axios.get('/search?query=react');
    this.setState({ articles: response.data.hits });
  }

  componentDidUpdate(_, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextTodos));

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  addStickers = (img, label) => {
    this.setState(prevState => ({
      stickers: [...prevState.stickers, { id: nanoid(), img, label }],
    }));
  };

  deleteSticker = stickerId =>
    this.setState(({ stickers }) => ({
      stickers: stickers.filter(sticker => sticker.id !== stickerId),
    }));

  deleteTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleComleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = _ => {
    const { filter, todos } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = _ => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <Clock />

        <IconButton
          type="button"
          onClick={this.toggleModal}
          aria-label="Add todo"
        >
          <AddIcon width="50" height="50" fill="#fff" />
        </IconButton>

        <h2>TODOS:</h2>
        <div>
          <p>Count all: {totalTodoCount}</p>
          <p>Count completed: {completedTodoCount}</p>
        </div>

        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDelete={this.deleteTodo}
          onToggleCompleted={this.toggleComleted}
        />

        <h2>Modal</h2>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} onClose={this.toggleModal} />
          </Modal>
        )}

        <h2>Task-2: Dropdown</h2>
        <Dropdown />

        <h2>Task-3: Counter</h2>
        <Counter initialValue={0} />

        <h2>Task-4: Color picker</h2>
        <ColorPicker options={colorPicker} />

        <h2>StickerList</h2>
        {stickers.length > 0 && (
          <StickerList items={stickers} onDelete={this.deleteSticker} />
        )}

        <h2>LoginForm</h2>
        <LoginForm onSubmit={console.log} />

        <h2>SignUpForm</h2>
        <SignUpForm onSubmit={console.log} />

        <h2>Form-Nanoid</h2>
        <Form />
      </>
    );
  }
}
