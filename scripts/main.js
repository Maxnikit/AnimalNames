function AnswerCheck(AnimalInput, RightAnswer) {
  let result = AnimalInput === RightAnswer;
  return result;
}
function AnswerCheck1() {
  console.log(AnswerCheck("Свинья", "Свинья"));
  console.log(AnswerCheck("Боров", "Свинья"));
  if (AnswerCheck("Свинья", "Свинья") === true) {
    NextAnimalImg(0);
  } else {
    console.log("Нет");
  }
}

var ans_array = ["pig", "bear", "horse"];
m = 0;
function NextAnimalAns() {
  m++;
  document.getElementsById("answer").src = ans_array[m];
  if (m == ans_array.length - 1) {
    m = -1;
  }
}
var img_array = ["images/pig.jpg", "images/bear.jpg", "images/horse.jpg"];
i = 0;
function NextAnimalImg() {
  i++;
  document.getElementById("image").src = img_array[i];
  if (i == img_array.length - 1) {
    i = -1;
  }
}

var myButton = document.querySelector("#ChangeUser");
var myHeading = document.querySelector("#username");
function setUserName() {
  var myName = prompt("Пожалуйста, введите ваше имя:");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Привет, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Привет, " + storedName + "!";
}
myButton.onclick = function () {
  setUserName();
};
var ScriptCheck = document.querySelector("#ScriptCheck");
ScriptCheck.textContent = "JavaScript активен";
