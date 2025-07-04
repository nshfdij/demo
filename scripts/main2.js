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

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
  const userName = prompt("请输入你的名字。");
  localStorage.setItem("name", userName);
  myHeading.textContent = `Mozilla is cool,${userName}！`;
};
