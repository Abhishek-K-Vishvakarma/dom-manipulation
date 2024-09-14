// We have access div from html page;

let div = document.querySelector("div");
console.log(div);

// How to get innerText of div, plz see below...

div.innerText = "Hello Developers";

console.dir(div); // dir is dom model and seeing all method of dom in console section...

// How to Create DOM Structure...
// We have create h2 tag helps of dom...

let h2 = document.createElement("h2");
h2.innerText = "Abhishek is a Front-End Developer!";

document.querySelector("body").append(h2);
h2.style.color = 'red'
h2.style.backgroundColor = 'blue';

// How to Remove element from dom structure...

// Use this code for removing dom element : h2.remove();

