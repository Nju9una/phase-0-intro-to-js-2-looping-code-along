// Defining the writeCards function
function writeCards(names) {
    let thankYouMessages = [];
    for (let name of names) {
        thankYouMessages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
}
function countDown(num) {
    // Checking if the input is a positive integer
    if (num <= 0 || !Number.isInteger(num)) {
        console.log("Please provide a positive integer greater than zero.");
        return;
    }

    while (num >= 0) {
        console.log(num);
        num--;
    }
}



