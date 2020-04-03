import React from 'react';
import { connect } from 'react-redux';

const MessagesList = (props) => {

  return (
    <ul>
      {
        props.currentChatId ? ( null ) : ( <li>Select chat</li> )
      }
    </ul>
  );
};

const mapStateToProps = state => {

  return state.chats;

};

export default connect(mapStateToProps, null)(MessagesList);