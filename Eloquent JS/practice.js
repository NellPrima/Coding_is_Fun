// for (let line = "#"; line.length < 8; line + 1 "#")
//     console.log(line);


// for (let line = "#" ;line.length < 8; line += "#") {
//     console.log(line);
// };

// let result = 1;
// for (let counter = 0; counter < 10; counter = counter + 1) {
//     result = result * 4;
// }
// console.log(result);

// let x = 12;
// let y = 2;
// console.log(x + y);

// let size = 8;
// let board = "";
// for (let y = 0; y < size; y++) {
//     for (let x = 0; x < size; x++) {
//         if ((x + y) % 2 == 0) {
//             board += " ";
//         } else {
//             board += "#";
//         }
//     }
//     board += "\n";
// }

// console.log(board);

// let size = 3;
// let board = "*";
// for (let y =  ; y < size; y++) {
//     for (let x = 0 ; x < size; x++) {
//         if ((x + y) % 2 == 0) {
//             board += " &";
//         } else {
//             board += "*";
//         }
//     }
//     board += "\n";
// }

// console.log(board);

// const makeNoise = function() {
//     console.log()
// }

// makeNoise();

// function addNumbers(x, y) {
//     return x + y;
// }



// console.log(addNumbers(5, 5));

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1 ) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)

    };
     ingredient(1, "can" , "chickpeas");
     ingredient(0.25, "cup" , "tahini");
     ingredient(0.25, "cup" , "lemon juice");
     ingredient(1, "clove" , "garlic");
     ingredient(2, "tablespoon" , "olive oil");
     ingredient(0.5, "teaspoon" , "cumin");
};

console.log(hummus(), ingredient());