import PropTypes from 'prop-types';
import { FriendItem, Status, Name } from './FriendListItem.styled';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status isOnlineStatus={isOnline}>{isOnline}</Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Friend;
