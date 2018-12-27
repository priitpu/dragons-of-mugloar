import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message/Message';
import './MessageManager.css';

const MessageManager = ({ message }) => (
  <div className="MessageManager">
    {message ? <Message text={message} /> : null}
  </div>
);

MessageManager.defaultProps = {
  message: ''
};

MessageManager.propTypes = {
  message: PropTypes.string
};

export default MessageManager;
