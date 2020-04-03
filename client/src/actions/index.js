import ACTION_TYPES from './actionTypes.js';

export const createLoginRequestAction = (values) => ( {
  type: ACTION_TYPES.LOGIN_REQUEST,
  values,

} );
export const createSignUpRequestAction = (values) => ( {
  type: ACTION_TYPES.SIGN_UP_REQUEST,
  values,

} );

export const createAuthSuccessAction = (user) => ( {
  type: ACTION_TYPES.AUTH_SUCCESS,
  user,
} );

export const createAuthErrorAction = (error) => ( {
  type: ACTION_TYPES.AUTH_ERROR,
  error,
} );

export const createSelectChatAction = (chatId) => ( {
  type: ACTION_TYPES.SELECT_CHAT_ACTION,
  chatId,
} );

export const createLoadChatMessagesSuccessAction = (chatId, messages) => ( {
  type: ACTION_TYPES.LOAD_CHAT_MESSAGES_SUCCESS,
  chatId,
  messages,
} );
