importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBsCmFSW6wRkoeVvCSdskoOITRxleZ6p7o",
    authDomain: "daburiyya.firebaseapp.com",
    projectId: "daburiyya",
    storageBucket: "daburiyya.appspot.com",
    messagingSenderId: "859741519675",
    appId: "1:859741519675:web:37bd7e663105663136411e",
    measurementId: "G-SQ8YJSW9T5"
  });

  const messaging = firebase.messaging();
