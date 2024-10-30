let shouldContinue = true;
document.addEventListener('keydown', (down) => {
    if (down.key === 'Escape'){
        shouldContinue = false;
    }
});

let number = 0;
while(number <= 50){
    console.log(number);
    number = number ++;
};