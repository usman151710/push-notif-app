// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyCaw43eCEb_G_Odg_Y1kFaimAlUGjL5bz8",
    authDomain: "push-notif-app-40e74.firebaseapp.com",
    projectId: "push-notif-app-40e74",
    storageBucket: "push-notif-app-40e74.appspot.com",
    messagingSenderId: "231518605614",
    appId: "1:231518605614:web:07d84ca8e67e8e1526aabf",
    measurementId: "G-ENFC3VP7ZP"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});

