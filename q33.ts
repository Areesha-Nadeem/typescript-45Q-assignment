//question no 33
/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such
 as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.*/

// Store the numbers 1 through 9 in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loop through the array
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let ordinal;

    // Use an if-else chain to determine the proper ordinal ending
    if (number == 1) {
        ordinal = "st";
    } else if (number == 2) {
        ordinal = "nd";
    } else if (number == 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }

    console.log(`${number}${ordinal}`);
}
