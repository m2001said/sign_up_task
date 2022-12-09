const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

let trueInput;

const checkInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  // const first = usernameValue.substring(0, 1);
  // const last = usernameValue.substring(usernameValue.length - 1);
  // console.log(first, typeof first);
  // console.log(last, typeof last);
  // if (first === 5) {
  //   console.log("num");
  // } else {
  //   console.log("no");
  // }

  //---------username-----------
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be empty");
    //
  } else if (usernameValue.length < 5 || usernameValue.length > 15) {
    setErrorFor(username, "Username can be from 5 to 15 character only");
    //
  } else if (usernameValue[0] >= 0) {
    setErrorFor(username, "Username can not start with any number");
  } else if (usernameValue[usernameValue.length - 1] >= 0) {
    setErrorFor(username, "Username can not end with any number");
    // ! make sure
  } else if (!usernameValue.match("^[A-Za-z0-9]*$")) {
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
  trueInput = false;
};

//for making successful messages
const setSuccessFor = (input) => {
  const inputContainer = input.parentElement;
  inputContainer.className = "container-text-input success";
  trueInput = true;
};

//
// const validCharacter = (username) => {
//   const validCharacters =
//     "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   for (var i = 0; i < username.length; i++) {
//     if (validCharacters.indexOf(username.substr(i, 1)) == -1) {
//       return false;
//     }
//   }
// };
// const validStartAndEnd = (username) => {
//   for (let i = 0; i <= 9; i++) {
//     if (
//       username.substring(0, 1) === i ||
//       username.substring(username.length - 1) === i
//     ) {
//       return false;
//     } else {
//       console.log("not valid");
//     }
//   }
// };
/*------------------------------------  
-----------------Fetching Api-----------------
---------------------------------------*/
// const api = (jsonData) => {
//   return fetch("https://goldblv.com/api/hiring/tasks/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jsonData),
//   });
// };
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
  // const username = e.target[0].value;
  // const email = e.target[1].value;
  // const password = e.target[2].value;
  // const confirmedPassword = e.target[3].value;

  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (trueInput) {
        const emailLocal = localStorage.setItem("email", email.value);
        const usernameLocal = localStorage.setItem("username", username.value);
        window.location.replace("succeeded.html");
      }
      console.log(data);
    })
    .catch((err) => console.log(err));
  // const username = e.target[0].value;
  // const email = e.target[1].value;
  // const password = e.target[2].value;
  // const confirmedPassword = e.target[3].value;

  // api({ username, email, password, confirmPassword })
  //   .then((res) => res.json())
  //   .then((json) => {
  //     console.log(json);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
});
