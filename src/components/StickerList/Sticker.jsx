import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Img, Label, Card } from './Sticker.styled';

export class Sticker extends Component {
  static propTypes = {
    sticker: PropTypes.shape({
      img: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  };

  render() {
    const {
      sticker: { img, label },
      isSelected,
      onSelected,
    } = this.props;

    return (
      <Card onClick={onSelected}>
        <Img src={img} alt={label} />
        {isSelected && <Label>{label}</Label>}
      </Card>
    );
  }
}
