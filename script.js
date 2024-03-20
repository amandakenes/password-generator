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
const styles = {
	"background-color": "#101820",
	color: "#FEE715",
};
lengthPass.style.cssText = `outline: none; border: none; padding: 9px; border-radius: 4px; width: 250px; margin-left: 5px; margin-bottom: 25px; background-color: #233547fb; color: ${styles.color}; opacity: 70%`;
heading.style.cssText =
	"font-size: 85px; text-shadow: 4px 0px 1px rgba(204, 185, 17, 1); border-bottom: 20px dotted #FEE715; padding-bottom: 20px; padding-top: 50px";
label.style.cssText = "font-size: 25px";
main.style.cssText =
	"display: flex; flex-direction: column; align-items: center; justify-content: center";
passInput.style.cssText =
	"display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 15px; margin: 50px 0";
passInputText.style.cssText =
	"display: flex; flex-direction: coolumn; gap: 10px";
document.body.style.cssText = `background-color: ${styles["background-color"]}; color:${styles.color}`;
let newPass = "";
passwordText.innerHTML = `<p style="font-size: 25px; letter-spacing: 0.7px">Password generated</p>`;
main.appendChild(passwordText);
passwordText.style.cssText =
	"visibility: hidden; margin: 40px 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; font-size: 20px";
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
		passwordText.style.visibility = "visible";
		passInput.style.display = "none";
		const copyToClipboard = (str) => {
			str = newPass;
			if (navigator && navigator.clipboard && navigator.clipboard.writeText)
				return navigator.clipboard.writeText(str);
			return Promise.reject("The Clipboard API is not available.");
		};
		copyToClipboard();
		passwordText.onmouseover = () => {
			copied.innerHTML = "The password has been copied to your clipboard";
			passwordText.appendChild(copied);
		};
	} else {
		alert("You must input a valid number");
	}
};
