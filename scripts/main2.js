const myImage = document.querySelector("img");

//getAttribute()与setAttribute()方法
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/火狐.png") {
    myImage.setAttribute("src", "images/firefox-icon.jpg");
  } else {
    myImage.setAttribute("src", "images/火狐.png");
  }
};
//点击按钮，出现prompt对话框，输入名字，保存到localStorage中
//如果localStorage中有名字，则显示“Mozilla is cool, xxx”
//没有名字，则显示“Mozilla is cool, (输入的名字)”，并将名字保存到localStorage中
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

function addParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

//猜数字游戏
// 生成1到100之间的随机数
// 用户输入猜测的数字，最多10次
let randomnum = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;

function checkGuess() {
  const userGuess = Number(guessField.value); // 将输入的值转换为数字
  if (guessCount === 1) {
    // 如果是第一次猜测，初始化显示“Previous guesses: ”
    guesses.textContent = "Previous guesses: ";
  }
  // 在页面上追加显示本次猜测的数字
  guesses.textContent += userGuess + " ";
  if (userGuess === randomnum) {
    // 猜对了
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver(); // 游戏结束处理
  } else if (guessCount === 10) {
    // 猜了10次还没猜对，游戏结束
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    // 猜错了
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";

    if (userGuess < randomnum) {
      // 猜的数字太小
      lastResult.textContent = "Last guess was too low!";
    } else if (userGuess > randomnum) {
      // 猜的数字太大
      lastResult.textContent = "Last guess was too high!";
    }
  }
  guessCount++; // 猜测次数加1
  guessField.value = ""; // 清空输入框
  guessField.focus(); // 聚焦输入框，方便继续
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}
