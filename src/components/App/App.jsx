// import './App.css';
import { ProfileCard } from '../ProfileCard/ProfileCard';
import user from '../Data/user.json';

import { Statistics } from '../Statistics/Statistics';
import data from '../Data/data.json';

import { FriendList } from '../FriendList/FriendList';
import friends from '../Data/friends.json';

export const App = () => {
  return (
    <>
      <ProfileCard
      username = {user.username}
      avatar = {user.avatar}
      tag  = {user.tag}
      location  = {user.location}
      stats  = {user.stats}
    />
      <Statistics      
      title="Upload stats"
      stat = {data} />
      <FriendList friend = {friends} />
    </>
  );
};
