import ACTION_TYPES from '../actions/actionTypes.js';
import _ from 'lodash';

const initialState = {
  chats: {},
  currentChat: null,
};

function chatsReducer (state = initialState, action) {

  switch (action.type) {

    case ACTION_TYPES.SELECT_CHAT_ACTION:
      return {
        ...state,
        currentChat: action.chatId,
      };
    case ACTION_TYPES.LOAD_CHAT_MESSAGES_SUCCESS:
      const { chatId, messages } = action;
      const newState = _.clone(state);
      newState.chats[ chatId ].messages = messages;
      return newState;

    default:
      return state;
  }

}

export default chatsReducer;