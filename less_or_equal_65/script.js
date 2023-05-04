function testLessOrEqual(val) {
    if(val <= 12) { //change this line
        return "Smaller than or Equal to 12";
    }

    if(val <= 24) {  // change this line
        return "Smaller than or Equal to 24";
    }

    return "More than 24";
}

//Change this value to test
console.log(testLessOrEqual(10));