import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Wrapper, Option } from './ColorPicker.styled';

export class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ),
  };

  setActiveIdx = idx => {
    this.setState({ activeOptionIdx: idx });
  };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;
    const { label } = options[activeOptionIdx];

    return (
      <>
        <Wrapper>
          <p>
            Active color: <b>{label}</b>
          </p>
          {options.map(({ label, color }, idx) => (
            <Option
              key={label}
              style={{
                backgroundColor: color,
              }}
              onClick={_ => this.setActiveIdx(idx)}
            >
              {idx === activeOptionIdx && label}
            </Option>
          ))}
        </Wrapper>
      </>
    );
  }
}
