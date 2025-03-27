//DOM Manipulation.

//there are three types to access elements from a page.

let heading = document.getElementById("Heading1");
console.dir(heading); //by Id Name.

let headings = document.getElementsByClassName("Heading-class");
console.dir(headings); //by Class Name.

let paras = document.getElementsByTagName("p");
console.dir(paras); //by Tag Name.

let firstElements = document.querySelector("p");
console.dir(firstElements); //query-selector.

let allElements = document.querySelectorAll("p");
console.dir(allElements); //query-selectorAll.

let firstElement = document.querySelector(".paraFirst");
console.dir(firstElement); //query-selectorAll by class Name.

      //Attributes.

let div = document.querySelector("div"); //access element.
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p"); //access element.
console.log(para);

let cls = para.getAttribute("class");
console.log(cls);

let attr = para.setAttribute("class", "new class");
console.log(attr); //set-Attribute.

//Style (to change in css and html by JS).

let div = document.querySelector("div"); //access element.
console.log(div); // using style tag in console-----> div.style;

div.style.backgroundColor = "yellow"; //using style.
div.style.backgroundColor = "red"; //using style.
div.style.border = "4px dotted yellow"; //using style.
div.style.fontSize = "smaller"; //using style.
div.style.fontStyle = "underline"; //using style.
// div.style.visibility = "hidden";  //using style.

//Insert-Elements.

let newButt = document.createElement("button");
newButt.innerText = "Click Me";
console.log(newButt); //create a element.

let div = document.querySelector("div"); //access element.
console.log(div);
// div.append(newButt);  //add button at the end of the div.
// div.prepend(newButt);   //add button at the top of the div.
// div.before(newButt);   //add before the div.
// div.after(newButt);    //add after the div.

//Delete/Remove-Element.

let para = document.querySelector("p"); //access element.
console.log(para);

para.remove(); //remove para.
