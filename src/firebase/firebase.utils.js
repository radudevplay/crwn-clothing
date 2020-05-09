import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCeJ9jVDf0edhoypx8SrfqjunH3CA1bDEI',
	authDomain: 'crwn-clothing-c7a12.firebaseapp.com',
	databaseURL: 'https://crwn-clothing-c7a12.firebaseio.com',
	projectId: 'crwn-clothing-c7a12',
	storageBucket: 'crwn-clothing-c7a12.appspot.com',
	messagingSenderId: '370289266970',
	appId: '1:370289266970:web:cacabbea8b84ba6ed05ca3',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
