function printManyTimes(str) {
    "Use strict";

    const sentence = str + "is cool!";

    //sentence = str + " is amazing!"

    for (let i = 0; i < str.length; i+=2) {
        console.log(sentence);
    }
}

printManyTimes("FreeCodeCamp");