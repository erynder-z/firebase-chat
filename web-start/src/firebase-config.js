/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: 'AIzaSyDNhVKzn8h9xoB9W3nq9jLojtRnmuL3aGw',

  authDomain: 'friendlychat-f8139.firebaseapp.com',

  projectId: 'friendlychat-f8139',

  storageBucket: 'friendlychat-f8139.appspot.com',

  messagingSenderId: '317797734725',

  appId: '1:317797734725:web:8ad04f6aef8d48cb63862c',
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
