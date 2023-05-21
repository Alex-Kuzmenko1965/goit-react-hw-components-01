import React from "react";
import PropTypes from 'prop-types';
import cl from './ProfileCard.module.css';

export const ProfileCard = ({ avatar, username, tag, location, stats }) => {
  return (
    <>
    <div className={cl.profile}>
    <div className={cl.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={cl.avatar}
      />
      <p className={cl.name}>{username}</p>
      <p className={cl.tag}>@{tag}</p>
      <p className={cl.location}>{location}</p>
    </div>

    <ul className={cl.stats}>
      <li className={cl.item}>
        <span className={cl.label}>Followers</span><br/>
        <span className={cl.quantity}>{stats.followers}
        </span>
      </li>
      <li className={cl.item}>
        <span className={cl.label}>Views</span><br/>
        <span className={cl.quantity}>{stats.views}</span>
      </li>
      <li className={cl.item}>
        <span className={cl.label}>Likes</span><br/>
        <span className={cl.quantity}>{stats.likes}</span>
      </li>
    </ul>
    </div>
    </>
  );
};

ProfileCard.propTypes = {
  avatar: PropTypes.any.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object,
};