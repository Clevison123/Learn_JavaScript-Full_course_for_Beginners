function testGreaterOrEqual(val) {
    if(val >= 20) { //change this line
        return "20 or Over";
    }

    if(val >= 10) {  // change this line
        return "10 or Over";
    }

    return "Less than 10";
}

//Change this value to test
console.log(testGreaterOrEqual(10));