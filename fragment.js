// Create Multiple tag by Fragmatation()...
function Fragmention(){
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  let del = document.createElement("button");
  del.innerText = 'delete'; 

  let access = document.getElementById("inp").value;

  if(access.trim() !== ''){
    li.innerText = access;
    document.getElementById("inp").value = '';

    li.appendChild(del);
    ul.appendChild(li);
    
    li.style.color = 'orange';
    li.style.fontSize = '20px'
    li.style.border = '2px solid yellow';
    li.style.width = '250px'
    li.style.backgroundColor = 'green'
    li.style.float = 'right'
    del.style.backgroundColor = 'orange';
    del.style.float = 'right';
    del.style.boxShadow = '-2px -2px 5px aqua';
    del.style.cursor = 'pointer';

    del.addEventListener('click', function () {
      li.remove();
    });
  }else{
    alert("Please enter any text/value");
  }
};
