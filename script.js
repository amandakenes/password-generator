const letters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numbers = ["123456789"];
const symbols = ["!@#$%^&*"];
const lengthPass = document.querySelector("#length");
const btn = document.querySelector("button");
const passwordText = document.createElement("div");
const passInput = document.querySelector(".password-length");
const main = document.querySelector("main");
const passInputText = document.querySelector(".pass-input");
const heading = document.querySelector("h1");
const label = document.querySelector("label");
const copied = document.createElement("p");
const textCopied = document.createElement("div");
const newPassBtn = document.createElement("button");
const styles = {
  "background-color": "#101820",
  color: "#FEE715",
  outline: "none",
  border: "none",
  align: "center",
};

newPassBtn.style.cssText = `opacity: 0; transition: opacity 2s ease-in-out`;
textCopied.style.cssText = `width: 200px; padding: 40px; position: fixed; bottom: 0; right: 0; background-color: red; color: white; margin: 0 20px 20px 0;  opacity: 60%; border-radius: 8px`;
lengthPass.style.cssText = `outline: none; border: none; padding: 9px; border-radius: 4px; width: 250px; margin-left: 5px; margin-bottom: 25px; background-color: #233547fb; color: ${styles.color}; opacity: 70%`;
heading.style.cssText =
  "font-size: 85px; text-shadow: 4px 0px 1px rgba(204, 185, 17, 1); border-bottom: 20px dotted #283d52fb; padding-bottom: 20px; padding-top: 50px";
label.style.cssText = "font-size: 25px";
main.style.cssText =
  "display: flex; flex-direction: column; align-items: center; justify-content: center";
passInput.style.cssText =
  "display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 15px; margin: 50px 0";
passInputText.style.cssText =
  "display: flex; flex-direction: coolumn; gap: 10px";
document.body.style.cssText = `background-color: ${styles["background-color"]}; color:${styles.color}`;

let newPass = "";
passwordText.innerHTML = `<p style="text-decoration: underline; font-size: 28px; letter-spacing: 0.7px"><strong>Password generated</strong></p>`;
main.appendChild(passwordText);
passwordText.style.cssText =
  "opacity: 0; transition: opacity 1.2s ease-in-out; margin: 40px 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; font-size: 20px";

const copyToClipboard = (str) => {
  str = newPass;
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject("The Clipboard API is not available.");
};

function passwordCopied() {
  copied.innerHTML = "The password has been copied to your clipboard!";
  copied.style.cssText = `opacity: 0; font-size: 15px; margin-top: 12px; transition: opacity 2s ease-in-out;`;
  passwordText.appendChild(copied);
}

function generateNewPass() {
  passwordText.style.opacity = 0;
  passInput.style.display = "inital";
}

btn.onclick = () => {
  if (lengthPass.value !== "") {
    for (let a = 1; a <= lengthPass.value / 3; a++) {
      let i = Math.floor(Math.random() * letters[0].length);
      newPass += letters[0][i];
    }
    for (let b = 1; b <= lengthPass.value / 3; b++) {
      let x = Math.floor(Math.random() * numbers[0].length);
      newPass += numbers[0][x];
    }
    for (let c = 1; c <= lengthPass.value / 3; c++) {
      let z = Math.floor(Math.random() * symbols[0].length);
      newPass += symbols[0][z];
    }
    passwordText.innerHTML += `<p style="font-size: 30px; background-color: #233547fb; padding: 25px"><strong>${newPass}</strong></p>`;
    setTimeout(() => {
      passwordText.style.opacity = "1";
    }, 1200);
    passInput.style.display = "none";
    copyToClipboard();
    passwordText.onmouseover = passwordCopied();
    passwordText.appendChild(newPassBtn);
    setTimeout(() => {
      copied.style.opacity = 1;
      newPassBtn.style.opacity = 1;
      newPassBtn.innerHTML = "Generate new password";
    }, 2000);
  } else {
    alert("You must input a valid number");
  }
  newPassBtn.onclick = generateNewPass();
};
