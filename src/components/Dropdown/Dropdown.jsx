import { Btn } from 'components/App/App.styled';
import React, { Component } from 'react';
import { Container, Modal } from './Dropdown.styled';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = _ => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;

    return (
      <>
        <Container>
          <Btn onClick={this.toggle}>{visible ? 'Close' : 'Open'}</Btn>
        </Container>

        {visible && <Modal>Dropdown modal </Modal>}
      </>
    );
  }
}
