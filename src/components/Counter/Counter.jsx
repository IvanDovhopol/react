import { Btn } from 'components/App/App.styled';
import React, { Component } from 'react';
import { Wrapper, BtnWrapper, Count } from './Counter.styled';

export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleInc = _ => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDec = _ => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <Wrapper>
          <Count>{value}</Count>

          <BtnWrapper>
            <Btn onClick={this.handleInc}>Up</Btn>
            <Btn onClick={this.handleDec}>Down</Btn>
          </BtnWrapper>
        </Wrapper>
      </>
    );
  }
}
