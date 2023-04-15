// Import the functions you need from the SDKs you need
// import { firebase } from './firebase';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyCaw43eCEb_G_Odg_Y1kFaimAlUGjL5bz8",
    authDomain: "push-notif-app-40e74.firebaseapp.com",
    projectId: "push-notif-app-40e74",
    storageBucket: "push-notif-app-40e74.appspot.com",
    messagingSenderId: "231518605614",
    appId: "1:231518605614:web:07d84ca8e67e8e1526aabf",
    measurementId: "G-ENFC3VP7ZP"
};

//VAPID_KEY_PUSH_NOTIF: 'BB6qCkq94ovaUnAtr0Gc_Q_2QxjJHrdj2wQfA9dtkTOsYcN3DQFdjqCVC8ykMm2eHhf60PxGGa9uSrShq71qcUQ'

export const getAppToken = async (setTokenFound) => {
    return getToken(messaging, { vapidKey: 'BB6qCkq94ovaUnAtr0Gc_Q_2QxjJHrdj2wQfA9dtkTOsYcN3DQFdjqCVC8ykMm2eHhf60PxGGa9uSrShq71qcUQ' }).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(true);
            // Track the token -> client mapping, by sending to backend server
            // show on the UI that permission is secured
        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound(false);
            // shows on the UI that permission is required 
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // catch error while creating client token
    });
}

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });


const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);