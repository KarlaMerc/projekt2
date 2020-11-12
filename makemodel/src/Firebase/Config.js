import firebase from 'firebase';
import 'firebase/firestore';


const settings = {timestampsInSnapshots: true}

var firebaseConfig = {
    apiKey: "AIzaSyCZwC63THEVLp9LJhBz0rYcWMNtGft4rVg",
    authDomain: "makemodel-3b659.firebaseapp.com",
    databaseURL: "https://makemodel-3b659.firebaseio.com",
    projectId: "makemodel-3b659",
    storageBucket: "makemodel-3b659.appspot.com",
    messagingSenderId: "110014409959",
    appId: "1:110014409959:web:145b7ea419dc005c6e4642"
  };
  firebase.initializeApp(firebaseConfig);
  //firebase.firestone().settings(settings);

  export default firebase;
  // Initialize Firebase