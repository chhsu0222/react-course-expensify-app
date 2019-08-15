import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBgBO8ye2T-fn2ZeDbCrx-OSL8r6dCC1Aw",
    authDomain: "expensify-abc3f.firebaseapp.com",
    databaseURL: "https://expensify-abc3f.firebaseio.com",
    projectId: "expensify-abc3f",
    storageBucket: "",
    messagingSenderId: "391298333468",
    appId: "1:391298333468:web:c8db6acf5c424700"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }
