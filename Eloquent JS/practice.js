
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n"
}
console.log(board);












// let num = 0;
// while (num <= 99) {
//     num = num +1;
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log( "FizzBuzz");
//   } else if (num % 5 === 0) {
//     console.log("Buzz");
//   } else if (num % 3 === 0) {
//     console.log( "Fizz");
//   }
//   else {
//     console.log(num);
//   }
// }


    
 

// let x = 3;
// let y = 3;

// if (x && y === 3) {
//     console.log("They are both equal to 3.");
// }
// else {
//     console.log("butts");
// };