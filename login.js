// Import Firebase functions needed for the app
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4tDJzCowSRhk5G56CGPXuL-0NJHF_00w",
    authDomain: "edureach-4bcd4.firebaseapp.com",
    projectId: "edureach-4bcd4",
    storageBucket: "edureach-4bcd4.firebasestorage.app",
    messagingSenderId: "752619073496",
    appId: "1:752619073496:web:4ffd3ec60487949278ccad",
    measurementId: "G-X12PSTQH25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Log in with Email and Password
document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "index.html";  // Redirect to home page after successful login
        })
        .catch((error) => {
            console.error("Login Error: ", error);
            alert("Error: " + error.message);  // Show error message if login fails
        });
});

// Register a new user
document.getElementById('register').addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent the default form submission

    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('psame').value;  // Use the correct field for confirm password

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Registration successful!");
            window.location.href = "index.html";  // Redirect after registration
        })
        .catch((error) => {
            alert("Error: " + error.message);  // Show error message if registration fails
        });
});

// Sign in with Google
function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            alert("Google Sign-in successful!");
            window.location.href = "index.html";  // Redirect after Google login
        })
        .catch((error) => {
            console.error("Google Login Error: ", error);
            alert("Error: " + error.message);  // Show error message if Google login fails
        });
}

// Add event listener to the Google Sign-In button
document.getElementById("google-login").addEventListener("click", signInWithGoogle);
