//Defining the options of the user
const tipOptions = {
    firstOption: 5,
    secondOption: 10,
    thirdOption: 15,
    fourthOption: 18,
    fifthOption: 20,
    sixthOption: 25
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

const errorStyleHandler = () => {
    if (totalBill == 0) {
        document.querySelector(".BillInput").style.border = "2px solid #ff0000";
    }
    if (totalBill > 0) {
        document.querySelector(".BillInput").style.border = "none";
    }

}

const selectingTipAmount = (userSelection, people) => {
    tipAmount = (totalBill * userSelection) / 100;
    if (people > 0) {
        totalAmountPerson = Math.round((tipAmount / people) * 100) / 100;
    }
    errorStyleHandler();
    userInterfaceHandler();
}

const userInterfaceHandler = () => {
    document.querySelector("#tip").textContent = tipAmount + "$";
    document.querySelector("#personTip").textContent = totalAmountPerson;
}

const resetApp = () => {

}



