function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "Alpha"
            break;
        case 2:
            answer = "Beta"
            break;
        case 3: 
            answer = "Gamma"
            break;
        case 4:
            answer = "Delta"
            break;
    }


    return answer;
}

//change this value to test
console.log(caseInSwitch(4));


/*
Write a switch statement which tests val and sets answer for the following conditions:
1 - "Alpha"
2 - "Beta"
3 - "Gamma"
4 - "Delta"
*/