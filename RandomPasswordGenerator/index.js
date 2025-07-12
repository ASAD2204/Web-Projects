const characters = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}],|:;<>.?/"
];

const Pbox1 = document.getElementById("pbox-1");
const Pbox2 = document.getElementById("pbox-2");

function GeneratePassword() {
  const length = parseInt(document.getElementById("length-sel").value);
  const type = document.getElementById("type-sel").value;

  let selectedCharacters = [];

  if (type === "alphanumeric") {
    selectedCharacters = characters.filter((ch) => /[a-zA-Z0-9]/.test(ch));
  } else if (type === "alphabet") {
    selectedCharacters = characters.filter((ch) => /[a-zA-Z]/.test(ch));
  } else if (type === "digit") {
    selectedCharacters = characters.filter((ch) => /[0-9]/.test(ch));
  } else {
    selectedCharacters = characters;
  }

  function PasswordGenerator(len) {
    let password = "";
    for (let i = 0; i < len; i++) {
      const index = Math.floor(Math.random() * selectedCharacters.length);
      password += selectedCharacters[index];
    }
    return password;
  }

  Pbox1.textContent = PasswordGenerator(length);
  Pbox2.textContent = PasswordGenerator(length);
}

function copyPassword(id) {
  const text = document.getElementById(id).textContent;
  if (text) {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied: ${text}`);
    });
  }
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
}
