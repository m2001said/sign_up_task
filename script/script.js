const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

let regex = /^[A-Za-z][A-Za-z0-9]{3,13}[A-Za-z]$/;

const checkInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  //---------username-----------
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be empty");
  } else if (!usernameValue.match(regex)) {
    setErrorFor(
      username,
      "Username only can be capital, small letters, numbers and no spaces"
    );
  } else {
    setSuccessFor(username);
  }

  //---------email-----------
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  } else {
    setSuccessFor(email);
  }

  //---------password-----------
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password cannot be less than 8 ");
  } else {
    setSuccessFor(password);
  }

  //--------confirm password-----------
  if (confirmPasswordValue !== passwordValue) {
    setErrorFor(
      confirmPassword,
      "Confirmed password is not the same of password"
    );
  } else if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Confirmed password cannot be empty");
  } else {
    setSuccessFor(confirmPassword);
  }
};

//for making error messages
const setErrorFor = (input, message) => {
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector("small");
  inputContainer.className = "container-text-input error";
  small.innerText = message;
};

//for making successful messages
const setSuccessFor = (input) => {
  const inputContainer = input.parentElement;
  inputContainer.className = "container-text-input success";
};
const Pass = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  localStorage.setItem("User", emailValue);
  return (
    usernameValue.match(regex) &&
    passwordValue.length >= 8 &&
    confirmPasswordValue === passwordValue &&
    confirmPasswordValue.length >= 8
  );
};
/*------------------------------------  
-----------------Submit form-----------------
---------------------------------------*/
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  console.log(e);

  const data = {
    username: e.target[0].value,
    email: e.target[1].value,
    password: e.target[2].value,
    confirmedPassword: e.target[3].value,
  };

  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (Pass()) {
        const emailLocal = localStorage.setItem("email", email.value);
        const usernameLocal = localStorage.setItem("username", username.value);
        window.location.replace("succeeded.html");
      }
      console.log(data);
    })
    .catch((err) => console.log(err));
});
