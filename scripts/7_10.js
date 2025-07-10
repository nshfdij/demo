const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");

// button.addEventListener("click", () => {
//   alarm(name.value, delay.value)
//     .then((message) => {
//       output.textContent = message;
//     })
//     .catch((error) => {
//       output.textContent = error.message;
//     });
// });

//使用async/await重写
button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = error.message;
  }
});

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error("delay must be a positive number"));
      return;
    }
    setTimeout(() => {
      resolve(`wake up ${person}!`);
    }, delay);
  });
}

//滑块控件
const price = document.querySelector("#price");
const output1 = document.querySelector(".price-output");

output1.textContent = price.value;

price.addEventListener("input", () => {
  output1.textContent = price.value;
});
