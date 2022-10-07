import { initializeApp } from 'firebase/app'
import { initializeFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,

  authDomain: 'samarpana-pesu.firebaseapp.com',

  projectId: 'samarpana-pesu',

  storageBucket: 'samarpana-pesu.appspot.com',

  messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,

  appId: process.env.FIREBASE_APP_ID,

  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
let db

if (app) {
  console.log('App initialized.')
  db = initializeFirestore(app, {})
}

// const analytics = getAnalytics(app)
