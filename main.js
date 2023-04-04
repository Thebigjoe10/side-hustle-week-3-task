var signupForm = document.getElementById("signupForm");

// Add an event listener to the Signup Form when submitted
signupForm.addEventListener(
  "submit",
  function (event) {
    // Prevent the default form submission action
    event.preventDefault();

    // Get the form data
    var username = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirm-password")
      .value.trim();

    // Check if the name field is empty
    if (!username || !email || !password || !confirmPassword) {
      errorMessage.innerHTML = "Please fill in all fields";
      return;
    }

    // check if password meets the minimum requirements
    if (password.length < 8) {
      alert("Password should be at least 8 characters long");
      return;
    }

    // check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Create an object to store the data
    const formData = { username, email, password };

    // Send a POST request to the server with the form data
    fetch("https://echo.hoppscotch.io/post/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the server response
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
    // If all fields are valid, submit the form
    alert("Signup successful!");
    window.location.replace("index.html");
  },
  signupForm
);
function isValidEmail(email) {
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}


let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});