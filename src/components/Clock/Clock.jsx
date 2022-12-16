import React, { PureComponent } from 'react';
import { Timer } from './Clock.styled';

export class Clock extends PureComponent {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intevalId = null;

  componentDidMount() {
    this.intevalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intevalId);
  }

  render() {
    return <Timer>{this.state.time}</Timer>;
  }
}
