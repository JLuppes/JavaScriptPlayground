console.log("Script loaded!");

function moveTheThing() {
  const theThing = document.getElementById("theThing");
  const rightBlock = document.getElementById("rightBlock");
  const leftBlock = document.getElementById("leftBlock");
  leftBlock.childElementCount > 0
    ? rightBlock.append(theThing)
    : leftBlock.append(theThing);
}

function styleTheText() {
  let fancyText = document.getElementById("fancyText");
  fancyText.style.color = "green";
  fancyText.style.fontFamily = "wingdings";
  fancyText.style.fontSize = "3em";
}

function getFormValues() {
  let firstField = document.getElementById("firstField");
  let secondField = document.getElementById("secondField");
  let thirdField = document.getElementById("thirdField");

  let firstResult = document.getElementById("firstResult");
  let secondResult = document.getElementById("secondResult");
  let thirdResult = document.getElementById("thirdResult");

  firstResult.textContent = firstField.value;
  secondResult.textContent = secondField.value;
  thirdResult.textContent = thirdField.checked;
}

function countTheStuff() {
  // Your code here
}

function addNewRow() {
  // Your code here
}

function yourBonusChallenge() {
  // Your code here
}
