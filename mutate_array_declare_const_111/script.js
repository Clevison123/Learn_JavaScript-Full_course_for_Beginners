const s = [5,7,2];
function editInPlace() {
    "Use strict";

    //s = [2,5,7];
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();

console.log(s);