import io from 'socket.io-client';

export const chatSocket = io('ws://localhost:3000/homepage');