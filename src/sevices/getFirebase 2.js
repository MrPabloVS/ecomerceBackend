import firebase from "firebase"

import 'firebase/firestore'



// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";

//esto me lo da firebase pero da error //import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgfvr_Irnrl7uqytHuLjRzqxcp2Hw8etg",
  authDomain: "coderhouse-ecomercereact.firebaseapp.com",
  projectId: "coderhouse-ecomercereact",
  storageBucket: "coderhouse-ecomercereact.appspot.com",
  messagingSenderId: "368590010169",
  appId: "1:368590010169:web:1e4946fe4e4a866aea5ae8",
  measurementId: "G-D1YRRJ9CRW"
};

// Initialize Firebase

//const analytics = getAnalytics(app);

const app = firebase.initializeApp(firebaseConfig)


// export function getFirebase(){
//     return app
// }

export function getFirestore(){    
    return firebase.firestore(app)
}