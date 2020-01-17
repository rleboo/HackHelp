import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCCkxOG9HgqTaOi_ZRUg330wch31CEEYoc",
    authDomain: "helpme-dd0dc.firebaseapp.com",
    databaseURL: "https://helpme-dd0dc.firebaseio.com",
    projectId: "helpme-dd0dc",
    storageBucket: "",
    messagingSenderId: "413626108663",
    appId: "1:413626108663:web:a3f8611756b5ddf01021f2"
};

// Potentially add another firebase applications to act as development

class Firebase {
  constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.database();
  }
    doCreateUserWithEmailAndPassword = (email, password) =>
	this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
	this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}
export default Firebase;
