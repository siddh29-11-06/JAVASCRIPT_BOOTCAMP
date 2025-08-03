//Largest Prime Factor of 600851475143

function largestPrimeFactor(number) {
    let largestFactor = 1;
    
    while (number % 2 === 0) {
        largestFactor = 2;
        number /= 2;
    }
    
    let factor = 3;
    while (factor * factor <= number) {
        while (number % factor === 0) {
            largestFactor = factor;
            number /= factor;
        }
        factor += 2; 
    }
    
    if (number > 2) {
        largestFactor = number;
    }
    
    return largestFactor;
}

console.log(largestPrimeFactor(600851475143));  