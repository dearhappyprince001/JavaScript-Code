//Difference between normal function and arrow function.

global.name = "Prince"; //this handles the arrow function lexical scope.

const obj = {
  name: "Happy",

  arrowGreet: () => {
    //console.log(`Arrow: Hello,${this.name}`); //in case of arrow function (this) is lexical.mtlb ye is object ko refer nhi krega chayeh ye uske andar ho vo globally check krega,toh is case mein hume globaly banana pdega.

    console.log(`Arrow: Hello,${name}`);
  },

  normalGreet: function () {
    console.log(`Normal: Hello,${this.name}`); //in case of normal function (this) is dynamic.mtlb ye jis object ke adar refer kiya hai ye usko hi refer krega.
  },
};

obj.arrowGreet();
obj.normalGreet();
