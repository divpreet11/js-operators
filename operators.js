let x = 5;
let y = 2;

function modulo(){
    var z = x % y;
    console.log(z);
}
//var is not accessible outside the function
// console.log(z)

function comparison()
{
    var a=5;
    var b=5;

    if(a === b){
        console.log("The data type and value of a and b are equal")
    }
    else if(a == b ){
        
        console.log("The value of a and b are equal")
    }
    else{
        console.log("a and b are not equal")
    }
    
}

function increment()
{
    c = 10;
    console.log("The Actual value of c: "+ c)
    c++;
    console.log("value of c is: " + c)
    c--;
    console.log("value of c is: " + c)
}

function bool(){
    var text1 = "A";
    var text2 = "B";
    var result = text1 < text2;
    console.log(result)
}

function logical(){
    var x = -1;
    var y = 10;
    if (x > 0 && y > 0) {
        console.log("Both x and y are positive.");
    } else if(x>0 || y>0) {
        console.log("one number is positive");
    }
    else{
        console.log("Both are negative")
    }  
}

function assignment(){
    var x = 10;
    x += 5;
    console.log(x)
}

modulo()
comparison()
increment()
bool()
logical()
assignment()