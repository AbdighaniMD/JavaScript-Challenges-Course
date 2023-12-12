function calculator(a, b, operator) {
    let result
    switch(operator){
        case '+':
            return result = a + b
        case '-':
            return result = a - b
        case '*':
            return result = a * b
        case '/':
            return result = a / b
        default:
            console.log("Invalid operator")
            //throw new Error('Invalid operator');
    }
    
}

module.exports = calculator;
