let fragment = document.createDocumentFragment();
let section = document.createElement("section");
let ul = document.createElement("ul");
let li = document.createElement("li");

ul.appendChild(li);
section.appendChild(ul);
fragment.appendChild(section);

document.querySelector("body").append(fragment);

let btn = document.createElement("button");
btn.innerText = 'Click';
document.querySelector("body").append(btn);

let box = document.createElement("input");
box.setAttribute('type', 'text');
box.setAttribute('id', 'inp');
box.setAttribute('placeholder', 'Enter any text');

document.querySelector("body").prepend(box);

btn.addEventListener('click', function () {
  var access = document.getElementById("inp").value;

  if (access.trim() !== '') {
    let newLi = document.createElement("li");
    newLi.innerText = access; 
    ul.appendChild(newLi);
    document.getElementById("inp").value = '';
  } else {
    alert('Please enter some text');
  }
});

