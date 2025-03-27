

//dynamic nature of an object.

let obj={
    age:22,
    nName:"ankit",
    wt:60,
};
console.log(obj);

obj.color="blue";  //change in the properties of an object.
console.log(obj);


   //object cloning.

   //1.Spread operator.


let src={
    age:21,
    wt:60,
    ht:180,
};

let dest={...src}; //spread-cloning.

console.log("Src:",src);
console.log("Dest:",dest);


     //2.Assign--Method.

     let src={
        age:22,
        wt:70,
        ht:190,
    };

    let dest=Object.assign({},src);  //assign-cloning.

    console.log("Src:",src);
    console.log("Dest:",dest);


    //3.iteration-Method.










    






