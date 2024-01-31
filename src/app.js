// app.js
import { generatePalette, isHexColor } from "./modules/utils";

// Cherche l'élément <form> dans le DOM
const formElement = document.querySelector("form");

const handleForm = (e) => {
  try {
    // Empêche le refresh lors de la soumission du formulaire
    e.preventDefault();
    // Cherche la valeur de l'élément <input>
    const inputValue = e.target.firstElementChild.value;
    // Vérifie que la valeur soit bien un code hexadécimal
    if (!isHexColor(inputValue)) {
      // Si ce n'est pas le cas, balancer l'erreur
      throw new Error(`${inputValue} is not a valid Hexadecimal color`);
    }

    // Crée la palette à partir du code hexadécimal
    const palette = generatePalette(inputValue);
		// Affiche dans la console la valeur d'entrée et la palette
    console.log(inputValue, palette);
  } catch (err) {
    // Attrape les erreurs du block try et les affiche dans la console.
    console.error(err);
  }
};

// Lorsque le formulaire est soumis, appèle le callback handleForm
formElement.addEventListener("submit", handleForm);

import { Color } from "./modules/Color";

const containerElement = document.querySelector("main");
const color = new Color([0,0,0]);
color.display(containerElement);