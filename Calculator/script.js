let buttonLabel = ["CE", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="]
const buttonContainer = document.querySelector(".buttons")
const mainframe = document.querySelector("#mainframe")
const operators = "+-/*"

let valueStorage = "";


//Problem it's passing through these values as facevalue - not as strings- Solution: use single quote '' inside the onclick ()

//Lesson 2: Numbers don't have a length property, only strings 
// let value = 86
// stringified_value = value.toString()
// console.log(stringified_value[stringified_value.length-1])




//Remaining problems:

//1. replace operator 





let btnPress = (content) => {

let num_content = parseInt(content)

if (Number.isInteger(num_content)) {

    if (mainframe.textContent === "0" || !Number.isInteger(parseInt(mainframe.textContent))) {

        mainframe.textContent = "" 
    } 
    mainframe.textContent += content

} else if (content === "CE") {

    valueStorage = 0;
    mainframe.textContent = 0;
    
} else if (content === "+" || content === "-" || content === "*" || content === "/") {

    if (operators.includes(valueStorage[valueStorage.length-1])){

        let fixed_valueStorage = valueStorage.slice(0, valueStorage.length-1)

        valueStorage = fixed_valueStorage

    }
    if (parseFloat(mainframe.textContent)) {
        valueStorage += mainframe.textContent    // 1. store previous value (ONLY if a number)
    }
 
    mainframe.textContent = content //2. show operator

    valueStorage += mainframe.textContent //3. add operator to storage variable


    
    // mainframe.textContent = content
    // valueStorage += mainframe.textContent


} else if (content === "." && !mainframe.textContent.includes(".")) {
    mainframe.textContent += content
} else if (content === "+/-") {

    if (mainframe.textContent[0] !== "-") {
        mainframe.textContent = `-${mainframe.textContent}`


    } else if (mainframe.textContent[0] === "-") {
        mainframe.textContent = mainframe.textContent.slice(1)

        

    }

} else if (content === "%") {
    mainframe.textContent = parseFloat(mainframe.textContent) * .01 

}

else if (content === "=") {
    valueStorage += mainframe.textContent
    if (valueStorage[0] == "0") {

        valueStorage = valueStorage.slice(1)
    }
    console.log(valueStorage)
    mainframe.textContent = eval(valueStorage)
    valueStorage = "0"

}


}


let populateButtons = () => {
    

for (let i = 0; i < buttonLabel.length; i++) {

    buttonContainer.innerHTML+= `<button class ="button" id = "btn${i}" onclick = "btnPress('${buttonLabel[i]}')"> ${buttonLabel[i]} </button>`


    }


} 

populateButtons();





