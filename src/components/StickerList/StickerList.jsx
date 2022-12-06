import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sticker } from '.';
import { List } from './StickerList.styled';

export class StickerList extends Component {
  state = {
    seletedIdx: null,
  };

  static propTypes = {
    stickers: PropTypes.arrayOf(
      PropTypes.shape({
        sticker: PropTypes.objectOf(
          PropTypes.shape({
            idx: PropTypes.number.isRequired,
          })
        ),
      })
    ).isRequired,
  };

  selectedSticker = idx => {
    this.setState({
      seletedIdx: idx,
    });
  };

  render() {
    const { stickers } = this.props;

    return (
      <List>
        {stickers.map((sticker, idx) => (
          <li key={idx}>
            <Sticker
              sticker={sticker}
              isSelected={this.state.seletedIdx === idx}
              onSelected={() => this.selectedSticker(idx)}
            />
          </li>
        ))}
      </List>
    );
  }
}
