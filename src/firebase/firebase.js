import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAIfjQkDNUtlG8VMX7BFZkMDC-02vzAp8w",
    authDomain: "clothingappdb.firebaseapp.com",
    databaseURL: "https://clothingappdb.firebaseio.com",
    projectId: "clothingappdb",
    storageBucket: "clothingappdb.appspot.com",
    messagingSenderId: "839670710742",
    appId: "1:839670710742:web:03cfc6ccc9ead693e6e477",
    measurementId: "G-67N7C664LX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;