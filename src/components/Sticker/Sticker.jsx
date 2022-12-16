import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Img, Label, Card } from './Sticker.styled';
import { IconButton } from 'components/IconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';
import { ReactComponent as RemoveIcon } from '../../icons/close.svg';
import { ImageModal } from 'components/ImageModal';

export class Sticker extends Component {
  static propTypes = {
    sticker: PropTypes.shape({
      img: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  };

  state = {
    isImageModalOpen: false,
  };

  toggleImgModal = _ => {
    this.setState(prevState => ({
      isImageModalOpen: !prevState.isImageModalOpen,
    }));
  };

  handleDelete = () => {
    const { sticker, onDelete } = this.props;
    onDelete(sticker.id);
    console.log(this.props.onDelete(sticker.id));
  };

  render() {
    const { isImageModalOpen } = this.state;

    const {
      sticker: { img, label },
    } = this.props;

    return (
      <>
        <Card>
          <Img src={img} alt={label} />
          <Label>{label}</Label>
          <IconButton onClick={this.toggleImgModal} aria-label="Add sticker">
            <AddIcon width="20" height="20" fill="#fff" />
          </IconButton>

          <IconButton onClick={this.handleDelete} aria-label="Remove sticker">
            <RemoveIcon width="20" height="20" fill="#fff" />
          </IconButton>
        </Card>

        <ImageModal
          isOpen={isImageModalOpen}
          img={img}
          onClose={this.toggleImgModal}
        />
      </>
    );
  }
}
