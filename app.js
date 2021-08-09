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
let numPeople;
let totalBill;
let tipAmount;
let totalAmountPerson;

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

const selectingTipAmount = (userSelection) => {
    tipAmount = (totalBill * userSelection) / 100;
    console.log(tipAmount)
}

