import { Btn } from 'components/App/App.styled';
import React, { Component } from 'react';
import { Editor, Textarea } from './TodoEditor.styled';

export class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    const { message } = this.state;
    e.preventDefault();

    this.props.onSubmit(message);
    console.log(message);

    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;

    return (
      <Editor onSubmit={this.handleSubmit}>
        <label>
          message
          <Textarea value={message} onChange={this.handleChange} />
        </label>

        <Btn type="submit">submit</Btn>
      </Editor>
    );
  }
}
