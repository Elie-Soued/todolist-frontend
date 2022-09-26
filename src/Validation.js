const userNameErrorMsg =
  "Username should be between 5 to 15 characters and can only contain numeric digits, letters and white space";
const passwordErrorMsg =
  "Password should be between 7 to 15 characters and contain at least one numeric digit and a special character";
const userNamePattern = /^[a-zA-Z0-9/\s/ ]{5,15}$/;
const passwordPattern =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

export { userNameErrorMsg, userNamePattern, passwordErrorMsg, passwordPattern };
