let currentNumber = 0;
let previousNumber = "";
let operation = "";
let display = document.getElementById("display");
let resultEl = document.getElementById("result");
let hascalculated = false;

//输入数字
function appendNumber(num) {
  if (hascalculated) {
    clearDisplay();
    hascalculated = false;
  }
  if (num === ".") {
    if (currentNumber.toString().includes(".")) {
      alert("Invalid input");
      return;
    }
    currentNumber = currentNumber.toString() + num;
  } else if (currentNumber === 0) {
    currentNumber = num;
  } else {
    currentNumber = currentNumber.toString() + num;
  }
  updateDisplay();
}
//清空
function clearDisplay() {
  currentNumber = 0;
  operation = "";
  previousNumber = "";
  resultEl.value = "0";
  updateDisplay();
}

//删除最后一个数字
function deleteNumber() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") {
    display.value = "0";
  }
}

//取余
function persent() {
  currentNumber = parseFloat(currentNumber.toString()) / 100;
}

//除法
function divide() {
  operation = "/";
  previousNumber = currentNumber;
  currentNumber = 0;
}

//乘法
function multiply() {
  operation = "*";
  previousNumber = currentNumber;
  currentNumber = 0;
}

//减法
function subtract() {
  operation = "-";
  previousNumber = currentNumber;
  currentNumber = 0;
}

//加法
function add() {
  operation = "+";
  previousNumber = currentNumber;
  currentNumber = 0;
}

//计算
function calculate() {
  currentNumber = eval(previousNumber + operation + currentNumber);
  operation = "";
  previousNumber = "";
  updateDisplay();
  hascalculated = true;
}
//显示
function updateDisplay() {
  if (operation === "%") {
    display.value = currentNumber;
  }
  display.value = previousNumber + " " + operation + " " + currentNumber;
}

function handleOpearation(type) {
  //直接处理del
  if (type === "del") {
    deleteNumber();
    return;
  }
  const currentDisplayValue = display.value.trim();

  if (type === ".") {
    // 获取当前正在输入的数字部分
    const lastNumber = currentDisplayValue[currentDisplayValue.length - 1];
    if (lastNumber.includes(".")) {
      alert("Invalid input");
      return;
    }
  }
  //如果前面一个字符是运算符，当前输入的是也是运算符，则输出提示信息
  if (
    ["+", "-", "*", "/", "%", "0", ".", ""].includes(
      currentDisplayValue[currentDisplayValue.length - 1]
    ) &&
    ["+", "-", "*", "/", "%"].includes(type)
  ) {
    alert("Invalid input");
    return;
  }
  //如果当前显示的是0，则去除0，显示输入的字符
  if (
    display.value === "0" &&
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(type.toString())
  ) {
    display.value = "";
  }
  //如果当前显示的是0，且输入的是小数点，则显示0.
  if (display.value === "0" && type === ".") {
    display.value = "0.";
  }

  if (
    display.value.startsWith(0) &&
    !display.value.startsWith("0.") &&
    display.value !== "0"
  ) {
    display.value = display.value.slice(1);
  }
  display.value += type;
  display.value.trim();
  switch (type) {
    case "C":
      clearDisplay();
      break;
    case "%":
      persent();
      break;
    case "/":
      divide();
      break;
    case "\\":
      break;
    case ".":
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      break;
    case "*":
      multiply();
      break;
    case "-":
      subtract();
      break;
    case "+":
      add();
      break;
    default:
      alert("Invalid input");
      break;
  }
}

function handleResult() {
  display.value = display.value.trim();
  if (display.value.startsWith(0)) {
    display.value = eval(display.value.substring(1));
  }
  console.log(display.value);
  console.log(eval(display.value));
  resultEl.value = eval(display.value);
}
