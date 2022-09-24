var names = ["chuks","dami","dayo","sugar", "auntie","scalar","uche","oyin"]

let guestName = prompt("What is your name");

if (names.includes(guestName) === true)
{
    console.log("Welcome " + guestName);
}
else{ console.log("you are not on the list")
     
}