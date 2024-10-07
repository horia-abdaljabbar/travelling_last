// loginApi.js
export const loginUser = async (email, password, rememberMe) => {
  const proxyUrl = `https://cnem.online/BE/api/Account/login`;

  const headers = {
    "Content-Type": "application/json",
    Accept: "*/*",
    "X-Api-Key": "e7bba24d-32ed-42bb-833c-30c4eec9088d",
  };

  const body = JSON.stringify({
    email: email,
    password: password,
    rememberMe: rememberMe,
  });

  try {
    const response = await fetch(proxyUrl, {
      method: "POST",
      headers: headers,
      body: body,
    });

    if (response.status === 200) {
      const responseData = await response.json();
      return {
        status: "success",
        message: responseData.message,
        userId: responseData.userId,
        confirmEmail: responseData.confirmEmail,
        confirmPhone: responseData.confirmPhone,
        phoneNumber: responseData.phoneNumber,
        token: responseData.token,
      };
    } else if (response.status === 400) {
      const responseData = await response.json();

      if (responseData.confirmPhone === false) {
        return {
          status: "Phone not confirmed",
          message: responseData.message,
        };
      } else if (responseData.message === "Invalid password.") {
        return {
          status: "invalid-password",
          message: responseData.message,
        };
      } else if (responseData.message === "Invalid login attempt.") {
        return {
          status: "email-not-exist",
          message: responseData.message,
        };
      } else if (response.status === 401) {
        window.location.href = "/Home";
      } else {
        return {
          status: "email-not-confirmed",
          message: responseData.message,
          confirmEmail: responseData.confirmEmail,
        };
      }
    } else {
      return { status: "login-failed" };
    }
  } catch (error) {
    return { status: "error", message: "Network error. Please try again." };
  }
};
