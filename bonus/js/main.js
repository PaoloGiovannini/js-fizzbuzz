const containerDom = document.querySelector('.container');

for (let i = 1; i <= 100; i++ ) {
    const quadratino = document.createElement('div');
    quadratino.classList.add('square');
    containerDom.append(quadratino);
    
    if (i % 3 == 0 && i % 5 == 0){
        quadratino.append("fizzbuzz");
        quadratino.classList.add('blu');
    } else if (i % 5 == 0){
        quadratino.append("buzz");
        quadratino.classList.add('grey');
    }else if (i % 3 == 0){
        quadratino.append("fizz");
        quadratino.classList.add('red');
    }else{
        quadratino.append(i);
        quadratino.classList.add('green');
    }
    
    
}

