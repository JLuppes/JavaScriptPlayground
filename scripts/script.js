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
  // Your code here
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
