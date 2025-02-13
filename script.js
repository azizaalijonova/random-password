const input = document.querySelector(".input");
const copy = document.querySelector(".copy");
const length = document.querySelector("#length");
const upper = document.querySelector("#uppercase");
const lower = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const btn = document.querySelector("button");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()";

function generatePassword() {
  let selectedChars = "";

  //Selected chars
  if (upper.checked) selectedChars += upperChars;
  if (lower.checked) selectedChars += lowerChars;
  if (numbers.checked) selectedChars += numberChars;
  if (symbols.checked) selectedChars += symbolChars;

  if (length.value === "") {
    alert("❗️ Please choose the password length.");
    return;
  }
  if (selectedChars === "") {
    alert("❗️ Please select at least one character type.");
    return;
  }

  //Generate pass
  const passLength = parseInt(length.value, 10);
  let password = "";
  for (let i = 0; i < passLength; i++) {
    const randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars[randomIndex];
  }

  //display in input
  input.value = password;
}

//Event listeners
btn.addEventListener("click", generatePassword);

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
  alert("Password copied ✅");
});
