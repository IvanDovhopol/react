import { nanoid } from 'nanoid';
import React, { Component } from 'react';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

export class SignUpForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  uniqueId = nanoid();

  handleChange = e => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = _ => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.uniqueId}>Name</label>
        <input
          type="text"
          placeholder="Enter login"
          name="login"
          value={login}
          onChange={this.handleChange}
          id={this.uniqueId}
        />

        <label htmlFor={this.uniqueId}>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={this.handleChange}
          id={this.uniqueId}
        />

        <label htmlFor={this.uniqueId}>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={this.handleChange}
          id={this.uniqueId}
        />

        <label>
          Agree to terms
          <input
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>

        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              age
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up
        </button>
      </form>
    );
  }
}
