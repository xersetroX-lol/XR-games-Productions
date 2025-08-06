// main.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import Authentication specific functions for the modular SDK
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWorEkwxYHzkNZAGLENySZ3ZdJGjsmWKk", // <-- Double-check this against your Firebase Console just in case!
  authDomain: "xr-game-productions.firebaseapp.com",
  projectId: "xr-game-productions",
  storageBucket: "xr-game-productions.firebasestorage.app",
  messagingSenderId: "726395997014",
  appId: "1:726395997014:web:f4e5251fac254a65b964f7",
  measurementId: "G-HZ2LZ0RE69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Get the Authentication service instance

document.addEventListener('DOMContentLoaded', function () {
  // Account info display (using Firebase Authentication state)
  const accountInfo = document.getElementById('accountInfo');
  const signOutBtn = document.getElementById('signOutBtn');

  // Listen for authentication state changes - Use the modular 'onAuthStateChanged'
  onAuthStateChanged(auth, function(user) {
    // ADDED FOR DEBUGGING: Log the user object to the console
    console.log("Firebase Auth State Changed. User object received:", user);

    if (user) {
      // User is signed in
      console.log("User is signed in:", user.email); // ADDED FOR DEBUGGING
      if (accountInfo) { // Check if element exists before using
        accountInfo.textContent = `Logged in as: ${user.email}`;
      } else {
        console.warn("Element with ID 'accountInfo' not found in the DOM.");
      }
      if (signOutBtn) { // Check if element exists before using
        signOutBtn.style.display = 'block'; // Show sign out button
      } else {
        console.warn("Element with ID 'signOutBtn' not found in the DOM.");
      }
      // You can also access user.uid, user.displayName, etc.
    } else {
      // User is signed out
      console.log("No user signed in."); // ADDED FOR DEBUGGING
      if (accountInfo) { // Check if element exists before using
        accountInfo.textContent = "No user signed in.";
      }
      if (signOutBtn) { // Check if element exists before using
        signOutBtn.style.display = 'none'; // Hide sign out button
      }
      localStorage.removeItem('user'); // Clear localStorage if no user is signed in via Firebase
    }
  });

  // Sign out functionality
  if (signOutBtn) {
    signOutBtn.addEventListener('click', function() {
      // Use the modular 'signOut' function
      signOut(auth).then(() => {
        // Sign-out successful. onAuthStateChanged will handle UI update.
        console.log("User signed out successfully.");
      }).catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
    });
  } else {
    console.warn("Sign out button with ID 'signOutBtn' not found for event listener setup.");
  }

  // Newsletter logic (your existing code) - all other existing code is fine here
  const form = document.getElementById('newsletterForm');
  const thanks = document.getElementById('newsletterThanks');
  const modal = document.getElementById('newsletterModal');
  const closeModalBtn = document.getElementById('closeNewsletterModal');

  if (form && thanks && modal) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      thanks.classList.remove('hidden');
      modal.classList.remove('hidden');
      form.reset();
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', function () {
      modal.classList.add('hidden');
    });
  }

  // Button: Show Alert
  const alertBtn = document.getElementById('alertBtn');
  if (alertBtn) {
    alertBtn.addEventListener('click', function () {
      alert('Hello! This is your alert.');
    });
  }

  // Button: Change Background
  const changeBgBtn = document.getElementById('changeBgBtn');
  if (changeBgBtn) {
    changeBgBtn.addEventListener('click', function () {
      document.body.style.backgroundColor = '#222244';
    });
  }

  // Button: Hide Newsletter
  const hideNewsletterBtn = document.getElementById('hideNewsletterBtn');
  const newsletterSection = document.getElementById('newsletterSection');
  if (hideNewsletterBtn && newsletterSection) {
    hideNewsletterBtn.addEventListener('click', function () {
      newsletterSection.style.display = 'none';
    });
  }
});
// This check is not strictly needed here as 'app' is defined above,
// and the DOMContentLoaded listener encapsulates the code that needs it.
// if (!app) {
//   console.error("Firebase app initialization failed.");
// }
