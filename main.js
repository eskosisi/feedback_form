const form = document.querySelector("form");
const fullName = document.getElementById("fio");
const phone = document.getElementById("phone");
const adress = document.getElementById("adr");
const email = document.getElementById("mail");
const message = document.getElementById("comm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = {};

  data.name = fullName.value;
  data.phone = phone.value;
  data.adress = adress.value;
  data.message = message.value;
  data.email = email.value;

  if (email.value.includes("gmail.com")) {
    alert("Регистрация пользователей с таким почтовым адресом невозможна!");
    email.classList.add("required_fields");
    return;
  } else email.classList.remove("required_fields");

  validate();
  console.log(data);
});

function validate() {
  let nameValidate = document.forms["myForm"]["name"].value;
  let phoneValidate = document.forms["myForm"]["tel"].value;

  if (nameValidate == "") {
    fullName.classList.add("required_fields");
    alert("Введите имя!");
    return false;
  } else fullName.classList.remove("required_fields");

  if (phoneValidate == "") {
    phone.classList.add("required_fields");
    alert("Введите телефон!");
    return false;
  } else phone.classList.remove("required_fields");
}
