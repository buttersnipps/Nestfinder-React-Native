import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAtwTUv9Dr608Fv4x7QTcWEfbos-HKyuk8",
    authDomain: "nestfinder-react-natice.firebaseapp.com",
    databaseURL: "https://nestfinder-react-natice.firebaseio.com",
    projectId: "nestfinder-react-natice",
    storageBucket: "nestfinder-react-natice.appspot.com",
    messagingSenderId: "502710052203"
};
firebase.initializeApp(config);
export const rootRef = firebase.database().ref();
export const houseRef = rootRef.child('houses');

export const pictureRef = firebase.storage();
export const savedRef = rootRef.child('Liked');


