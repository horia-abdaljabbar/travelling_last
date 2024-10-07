// submitLogin.js

import loginUser from './loginApi';

export const submitLogin = async (email, password, rememberMe, setErrorMessage, setIsLoading) => {
  setIsLoading(true);
  setErrorMessage("");

  // Call the login function
  const response = await loginUser(email, password, rememberMe);

  setIsLoading(false);

  // Handle the response
  if (response.status === "success") {
    // Redirect or perform action upon successful login
    window.location.href = "/Home"; // Redirect to Home page
  } else {
    // Display error message based on the response
    setErrorMessage(response.message || "Login failed. Please try again.");
  }
};
