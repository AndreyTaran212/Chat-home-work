import http from './index.js';

export const signUpUser = (data) => http.post('/sign_up', data, {
  headers: {
    'Content-type': 'multipart/form-data',
  },
});

export const loginUser = (data) => http.post('/login', data, {
  headers: { 'Content-type': 'application/json' },

});