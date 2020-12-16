import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCwfxeV0PPA51pQ0N208fRs5Ck1RuIQ6zY",
    authDomain: "reactlogin-3bf74.firebaseapp.com",
    projectId: "reactlogin-3bf74",
    storageBucket: "reactlogin-3bf74.appspot.com",
    messagingSenderId: "839147649016",
    appId: "1:839147649016:web:2f71a27a8946f27228480d"
  };
  // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);

 export default  fire;