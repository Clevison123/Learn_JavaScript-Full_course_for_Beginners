//Declare your variable here
var myGlobal = 10;

function fun1() {
    //assing 5 to oopsGlobal here
    oopsGlobal = 5;
}

// Only change cade above this line 
function fun2() {
    var output = "";
    if(typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output)
}
fun1();
fun2();