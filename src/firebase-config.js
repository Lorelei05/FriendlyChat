/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCoDPngLaZ40UYgH84A4PU9RgJT8J_-i3I",
  authDomain: "friendlychat-20c4e.firebaseapp.com",
  projectId: "friendlychat-20c4e",
  storageBucket: "friendlychat-20c4e.appspot.com",
  messagingSenderId: "935079116078",
  appId: "1:935079116078:web:764c0f4f5b0c008fe90ebf"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}



