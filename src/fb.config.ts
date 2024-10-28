import admin from "firebase-admin";

const serviceAccount = {
  apiKey: "AIzaSyCakg3Kx4A2eCZm2o6l0fg3WUeeFkOm3MI",
  authDomain: "test-otp-13a6d.firebaseapp.com",
  projectId: "test-otp-13a6d",
  storageBucket: "test-otp-13a6d.appspot.com",
  messagingSenderId: "654232418257",
  appId: "1:654232418257:web:dc841724e694508ac352f0",
  measurementId: "G-Z3EB3ZM2QS",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  projectId: "test-otp-13a6d",
});

export default admin;
