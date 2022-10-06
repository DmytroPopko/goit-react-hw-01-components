import FriendItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { FriendList } from './FriendList.styled';

function FriendsList({ friends }) {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendList>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
