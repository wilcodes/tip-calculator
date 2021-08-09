//Defining the options of the user
const tipOptions = {
    firstOption: 5,
    secondOption: 10,
    thirdOption: 15,
    fourthOption: 20,
    fifthOption: 25,
    sixthOption: 50
}
//Declaring the variables where the App will store the data
let numPeople = 0;
let totalBill = 0;
let tipAmount = 0;
let totalAmountPerson = 0;

//Getting The first Input from the user and storing the data in the variables declared previously
const getUserInput = () => {

    let userInput = document.querySelector(".BillInput").value;
    totalBill = userInput;
}
const getNumPeople = () => {

    let userInput = document.querySelector(".PeopleInput").value;
    numPeople = userInput;
}

getUserInput();
getNumPeople();

const selectingTipAmount = (userSelection, people) => {
    tipAmount = (totalBill * userSelection) / 100;
    if (people > 0) {
        totalAmountPerson = Math.round((tipAmount / people) * 100) / 100;
    }
    userInterfaceHandler();
}

const userInterfaceHandler = () => {
    document.querySelector("#tip").textContent = tipAmount + "$";
    document.querySelector("#personTip").textContent = totalAmountPerson;
}

const resetApp = () => {

}



