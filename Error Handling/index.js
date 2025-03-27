
    //1.Compile time error.

console.log 1;//syntax-error.

    //2.Run time error.

console.log(x); //reference-error.

 //try-catch finally block.

try{
    console.log("hi i m inside the try block");
    console.log(x);
    console.log("hi try block ends here");

}
catch(e){
    console.log("hello jee i m in catch block");
    // console.log("here is your Error:",e);

}
finally{ //finally block executes always whether error is handled or not.
    console.log("i will runs everytime because i am finally block");
}


     // let's create a custom error.


try{
 
    console.log(x);
}
catch(e){

    throw new Error("Bhai phle declare kro fir print karna");  //by throw keyword.

}