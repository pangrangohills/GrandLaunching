// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDpeA8R5t-bJGgvjK8apqLdybNglmGzYo",
  authDomain: "form-customer-gl-tph.firebaseapp.com",
  projectId: "form-customer-gl-tph",
  storageBucket: "form-customer-gl-tph.appspot.com",
  messagingSenderId: "559645662738",
  appId: "1:559645662738:web:f98f912f54bbb81ab542cb",
  measurementId: "G-LGL0KQFCLS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("btn").addEventListener("click", function (e) {
  set(ref(db, document.getElementById("usr").value), {
    nameCustomer: document.getElementById("usr").value,
    // domisili: document.getElementById("domi").value,
    // noTlp: document.getElementById("numbers").value,
    // Agent: document.getElementById("agent").value,
  });
  alert("SuccesFully");
});
