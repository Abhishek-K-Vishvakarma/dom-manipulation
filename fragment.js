function Fragmention(){
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  let del = document.createElement("button");
  del.innerText = 'delete'; 

  let access = document.getElementById("inp").value;
  li.innerText = access;

  li.appendChild(del);
  ul.appendChild(li);
  
  del.addEventListener('click', function(){
    li.remove();
  });
};
