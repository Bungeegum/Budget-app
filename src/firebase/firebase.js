import * as firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyBlcqhdzVVQS8RIqysD5HksLSO6Yb8F2A0",
    authDomain: "ballin-on-a-budget.firebaseapp.com",
    databaseURL: "https://ballin-on-a-budget.firebaseio.com",
    projectId: "ballin-on-a-budget",
    storageBucket: "",
    messagingSenderId: "547164776084",
    appId: "1:547164776084:web:1de56198b0cde632eb3681"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase,googleAuthProvider, database as default};
  /*database.ref().set({
      name:'David Valles'
    }).then(()=>{
      console.log('data is saved');
    }).catch((e)=>{
      console.log('this failed',0);
    });

    database.ref('attributes').set({
      height: 73,
      weight:150
    });
    */