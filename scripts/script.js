console.log("Script loaded!");


function moveTheThing(){
    const cakePic = document.getElementById("theThing")
    const leftBox = document.getElementById("leftBlock")
    const rightBox = document.getElementById("rightBlock")
    if (cakePic.parentElement === leftBox){
        rightBox.append(cakePic);
    } else {
        leftBox.append(cakePic)
    }
}

function styleTheText(){
    const theText = document.getElementById("fancyText")
    theText.style.color = "purple";
    theText.style.fontFamily = "fantasy";
    theText.style.fontSize = "30px"
}

function getFormValues(){
    const firstInput = document.getElementById("firstField")
    const firstValue = firstInput.value
    const firstResult = document.getElementById("firstResult")
    firstResult.textContent = firstValue
    
    const secondInput = document.getElementById("secondField")
    const secondValue = secondInput.value
    const secondResult = document.getElementById("secondResult")
    secondResult.textContent = secondValue

    const thirdInput = document.getElementById("thirdField")
    const thirdValue = thirdInput.checked
    const thirdResult = document.getElementById("thirdResult")
    thirdResult.textContent = thirdValue
}

function countTheStuff(){
    const allP = document.getElementsByTagName("p")
    const resultP = document.getElementById("countOfP")
    resultP.textContent = allP.length
    
    const allOfHTwo = document.getElementsByTagName("h2");
    const resultOfHTwo = document.getElementById("countOfH2")
    resultOfHTwo.textContent = allOfHTwo.length

    const resultTD = document.getElementById("countOfTD")
    const allTD = document.getElementsByTagName("td")
    resultTD.textContent = allTD.length
}

let count = 3
function addNewRow(){
    const allTable = document.getElementById("addRowsTable")
    const newRow = document.createElement("tr")
    const newBlock = document.createElement("td")
    // count = 3
    newBlock.innerHTML = ++count
    newRow.append(newBlock)
    allTable.append(newRow)
}

function yourBonusChallenge(){
    const chickenCheck = document.getElementById("chickenAsk")
    const chickenImage = document.getElementById("bbqChicken")
    
    if (chickenCheck.value.toLowerCase() === "barbecue chicken alert") {
        chickenImage.style.display = "block";
    } else {
        chickenImage.style.display = "none";
    }
}