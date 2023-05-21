import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import cl from './FriendList.module.css';

export const FriendList = ({ friend }) => {
  return (
    <ul className={cl.friend_list}>
    {friend.map(({ avatar, id, isOnline, name }) => (  
    <FriendListItem
      key={id}
      id = {id} 
      avatar = {avatar}
      name = {name}
      isOnline = {isOnline}
    />
    ))}
    </ul>
  );
};

FriendList.propTypes = {
  friend: PropTypes.array
}
