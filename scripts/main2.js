const myImage = document.querySelector("img");

//getAttribute()与setAttribute()方法
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
//点击按钮，出现prompt对话框，输入名字，保存到localStorage中
//如果localStorage中有名字，则显示“Mozilla is cool, xxx”
//没有名字，则显示“Mozilla is cool, (输入的名字)”，并将名字保存到localStorage中
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
};
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
