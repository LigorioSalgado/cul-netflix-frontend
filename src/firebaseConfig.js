import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA1lHzlmJ1w3TwB3d5aogZzVd9Z_Z3h6qk",
    authDomain: "b23-project.firebaseapp.com",
    databaseURL: "https://b23-project.firebaseio.com",
    projectId: "b23-project",
    storageBucket: "b23-project.appspot.com",
    messagingSenderId: "817657618464"
  };
  

  export default firebase.initializeApp(config);