import { clear } from "./operations.js";

const buttons = document.querySelectorAll("button");
const firstContent = document.querySelectorAll(".first__content");
const btnSign = document.querySelectorAll(".button__sign");
const specialBtnSign = document.querySelectorAll(".special_button__sign");

const screen = document.querySelector(".screen");
const firstNumber = document.querySelector(".first__number");
const screenSign = document.querySelector(".screen__sign");
const secondNumber = document.querySelector(".second__number");
const screenResult = document.querySelector(".showResult");

const reset = document.querySelector(".reset");
const equalTo = document.querySelector(".equal__to");

// Handle mouse in and out
buttons.forEach((each) => {
  each.onmouseover = (e) => {
    e.currentTarget.classList.add("add__bg__color");
  };
  each.onmouseout = (e) => {
    e.currentTarget.classList.remove("add__bg__color");
  };
});

// Handle click of numbers and decimal number
firstContent.forEach((each) => {
  each.onclick = (e) => {
    const content = e.currentTarget.textContent;
    if (screenSign.textContent === "") {
      screenResult.textContent = "";
      firstNumber.textContent += content;
    } else {
      screenResult.textContent = "";
      secondNumber.textContent += content;
    }
  };
});

// Handle click of signs
btnSign.forEach((each) => {
  each.onclick = (e) => {
    const content = e.currentTarget.textContent;
    screenSign.textContent = content;
  };
});

// Handle click of reset
reset.onclick = () => {
  screenResult.textContent = "";
  clear(firstNumber, screenSign, secondNumber);
};

// Perform Basic operation
equalTo.onclick = () => {
  const firstToNumber = Number(firstNumber.textContent);
  const secondToNumber = Number(secondNumber.textContent);
  const sign = screenSign.textContent;

  if (sign === "+") {
    const result = firstToNumber + secondToNumber;
    clear(firstNumber, screenSign, secondNumber);
    screenResult.textContent = result;
  } else if (sign === "-") {
    const result = firstToNumber - secondToNumber;
    clear(firstNumber, screenSign, secondNumber);
    screenResult.textContent = result;
  } else if (sign === "*") {
    const result = firstToNumber * secondToNumber;
    clear(firstNumber, screenSign, secondNumber);
    screenResult.textContent = result;
  } else if (sign === "÷") {
    const result = firstToNumber / secondToNumber;
    clear(firstNumber, screenSign, secondNumber);
    screenResult.textContent = result;
  } else {
    const result = "Invalid Operation";
    clear(firstNumber, screenSign, secondNumber);
    screenResult.textContent = result;
  }
};

// Perform special operations
specialBtnSign.forEach((each) => {
  each.onclick = (e) => {
    const firstToNumber = Number(firstNumber.textContent);

    if (e.currentTarget.textContent === "√") {
      const result = Math.sqrt(firstToNumber);
      clear(firstNumber, screenSign, secondNumber);
      screenResult.textContent = result;
    } else if (e.currentTarget.textContent === "x²") {
      const result = firstToNumber ** 2;
      clear(firstNumber, screenSign, secondNumber);
      screenResult.textContent = result;
    } else if (e.currentTarget.textContent === "%") {
      const result = firstToNumber / 100;
      clear(firstNumber, screenSign, secondNumber);
      screenResult.textContent = result;
    } else {
      const result = "Invalid Operation";
      clear(firstNumber, screenSign, secondNumber);
      screenResult.textContent = result;
    }
  };
});
