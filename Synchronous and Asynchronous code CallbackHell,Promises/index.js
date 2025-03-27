      
      //Synchronous-code.

console.log("one");  //first-instruction
console.log("two");  //second-instruction
console.log("three"); //third-instruction
console.log("four");  //fourth-instruction
console.log("five");  //fifth-instruction


    //Asynchronous-code.

console.log("one");
console.log("two");

function hello(){
    console.log("hello");
}
setTimeout(hello , 2000); //2s = 2000 ms,it takes time to print the result.

console.log("three");
console.log("four");


    // Callback.

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum);  //function contains another function which passes as an argument.




 

function getData(dataId,getNextData){
     
    setTimeout(() =>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

      //Callback-hell ------>(callback inside another callback) and it is difficult to understand and manage.

getData(1,() => {  //1st data.
    getData(2,() => {  //2nd data.
        getData(3,() => {   //3rd data.
            getData(4); //4th data.
        });  
    });
});



    //Promises.

let promise = new Promise((resolve , reject) =>{
    console.log("I m a promise");
    // resolve("success");  //it is a function.
    // reject("some error occured");  //it is also a function.
});


function getData(dataId , getNextData){
    return new Promise((resolve , reject) =>{
       setTimeout(() =>{
        console.log("data" , dataId);
        resolve("success");
        if(getNextData){
            getNextData();
        }
       },5000);
    });
}


