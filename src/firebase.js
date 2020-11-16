import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAsB9_8BTDB51xqRUUDtc-bYVUZhXoxgY4',
  authDomain: 'idobata-98af4.firebaseapp.com',
  databaseURL: 'https://idobata-98af4.firebaseio.com',
  projectId: 'idobata-98af4',
  storageBucket: 'idobata-98af4.appspot.com',
  messagingSenderId: '664424235803',
  appId: '1:664424235803:web:829d44ae08c66c306c09be'
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
