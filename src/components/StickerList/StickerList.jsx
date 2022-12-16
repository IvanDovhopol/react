import PropTypes from 'prop-types';
import { Sticker } from 'components/Sticker';
import { List } from './StickerList.styled';

export const StickerList = ({ items, onDelete }) => (
  <List>
    {items.map((item, idx) => (
      <li key={idx}>
        <Sticker sticker={item} onDelete={onDelete} />
      </li>
    ))}
  </List>
);

StickerList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      sticker: PropTypes.objectOf(
        PropTypes.shape({
          idx: PropTypes.number.isRequired,
        })
      ),
    })
  ).isRequired,
};
