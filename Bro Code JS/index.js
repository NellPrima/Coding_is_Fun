function add(x, y){
    result = x + y;
    return result;
}

let answer = add(2, 3);
console.log(answer + 6);

function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else {
        return false;
    }

}



console.log(isEven(10));