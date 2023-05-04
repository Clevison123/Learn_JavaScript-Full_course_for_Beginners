function testLogicalAnd(val) {
    //Only change code below this line 


    if (val <= 50 && val >= 25) { //shorthand and better
        return "Yes"
    }
    /*
    if (val <= 50) {
        if (val >= 25) {
            return "Yes";
        }
    }
    */

    //Only change code below this line 
    return "No"
}

//change this value to test
console.log(testLogicalAnd(35));
