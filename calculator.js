// Create a calculator function that will output the correct answer when invoked using this exact syntax

const calculator = first => operator => second => { 
    switch (operator) {
        case '+':
            return first + second;
        case '*':
            return first * second;
        case '-':
            return first - second;
    }
};

// outputs 2
console.log( calculator(1)('+')(1) );

// outputs 64
console.log( calculator(8)('*')(8) );

// outputs 8
console.log( calculator(10)('-')(2) );