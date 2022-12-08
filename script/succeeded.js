const changedEmail = document.querySelector(".changed-email");
const newUserName = localStorage.getItem("username");
const newEmail = localStorage.getItem("email");
changedEmail.textContent = `Name : ${newUserName} , Email : ${newEmail}`;
