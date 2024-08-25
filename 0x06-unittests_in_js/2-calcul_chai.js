
function calculateNumber(type, a, b) {
    a = Math.round(a);
    b = Math.round(b);
    if (type === 'SUM') {
        return a + b;
    } else if (type === 'SUBTRACT') {
        return a - b;
    } else if (type === 'DIVIDE') {
        if (b === 0) {
            return "Error";
        } else {
            return Math.round((a / b) * 10) / 10;
        }
    }
}


module.exports = calculateNumber;