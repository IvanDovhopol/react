import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component {
  loginInputId = nanoid();

  render() {
    return (
      <form>
        <label htmlFor={this.loginInputId}>Login</label>
        <input type="text" name="login" id={this.loginInputId} />
      </form>
    );
  }
}
