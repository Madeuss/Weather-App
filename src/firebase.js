import firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyChc37bR8nykMp-4t8GMk24HekTj0B1Iz8",
    authDomain: "weatherapp-559f6.firebaseapp.com",
    databaseURL: "https://weatherapp-559f6.firebaseio.com",
    projectId: "weatherapp-559f6",
    storageBucket: "weatherapp-559f6.appspot.com",
    messagingSenderId: "36840278510",
    appId: "1:36840278510:web:ad73630e68a23b0f24a6ff",
    measurementId: "G-8NJBGFEL19"
  };

  const devConfig = {
    apiKey: "AIzaSyChc37bR8nykMp-4t8GMk24HekTj0B1Iz8",
    authDomain: "weatherapp-559f6.firebaseapp.com",
    databaseURL: "https://weatherapp-559f6.firebaseio.com",
    projectId: "weatherapp-559f6",
    storageBucket: "weatherapp-559f6.appspot.com",
    messagingSenderId: "36840278510",
    appId: "1:36840278510:web:ad73630e68a23b0f24a6ff",
    measurementId: "G-8NJBGFEL19"
  };

  const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

  
export const fnirebaseImpl = firebase.initializeApp(config);