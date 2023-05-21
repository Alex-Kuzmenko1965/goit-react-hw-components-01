import React from "react";
import PropTypes from 'prop-types';
import cl from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {  
  return (
    <li className = {cl.item}>
      <span className = {
        isOnline ? `${cl.status} ${cl.green}` : `${cl.status} ${cl.red}`}></span>
      <img className = {cl.avatar} src={avatar} alt={name} width="48" />
      <p className= {cl.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,  
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.any.isRequired,
};