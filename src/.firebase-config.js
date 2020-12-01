import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCCdXTC_AinbnjhKBmv_KixFY8qpSvYzqE",
    authDomain: "idobatakaigi-test.firebaseapp.com",
    databaseURL: "https://idobatakaigi-test.firebaseio.com",
    projectId: "idobatakaigi-test",
    storageBucket: "idobatakaigi-test.appspot.com",
    messagingSenderId: "808118216006",
    appId: "1:808118216006:web:db5c5421f22d9dd989b147"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({name, text}) => {
    messageRef.push({name, text});
}