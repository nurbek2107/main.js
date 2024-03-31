for (let i = 2; i <= 100; i++) {
    let a = true;
    if (i === 2) {
        console.log(i);
    } else if (i > 2) {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                a = false;
                break;
            }
            
        }
        if (a) {
            console.log(i) 
        }
    }
}