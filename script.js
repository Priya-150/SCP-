// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Handle Login
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Successful login
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Login failed: " + errorMessage);
    });
});

// Handle Logout
const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", () => {
  auth.signOut().then(() => {
    window.location.href = "logout.html";
  });
});

// Redirect to dashboard if already logged in
auth.onAuthStateChanged((user) => {
  if (user) {
    // Redirect to the dashboard if the user is logged in
    window.location.href = "dashboard.html";
  }
});
