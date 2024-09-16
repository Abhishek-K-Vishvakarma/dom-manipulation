function myFunction(){
  let nm = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;
  console.log(nm.length  +":"+ pass.length);

  if (nm.length == 0){
      alert("Plz enter any name");
  }
  if (pass.length == 0) {
    alert("Plz enter any password");
  }
}

function allBtn(){
  let btn1 = document.createElement("button");
  btn1.innerText = 'alert';
  document.querySelector("body").append(btn1);
  btn1.style.backgroundColor = 'blue'
  btn1.style.color = 'white'
  btn1.style.width = '100px'
  btn1.style.fontSize = '20px'
  btn1.style.padding = '5px'
  let inp1 = document.createElement("input");
  inp1.style.marginLeft = '50%'
  inp1.setAttribute("type", "text");
  inp1.setAttribute("Id", "access1");
  inp1.setAttribute("placeholder", "inp1");
  document.querySelector("body").after(inp1);
  btn1.addEventListener('click', function(){
    
    let p = document.createElement("p");
    p.setAttribute("Id", "err1");
    document.querySelector("body").prepend(p);
    let doc = document.getElementById("access1").value;
    let ptag = document.getElementById("err1");
      console.log(doc.length);
      if(doc.length == 0){
        ptag.innerText = "Please Enter valid name";
        ptag.style.color = 'red';
        ptag.style.textAlign= 'center';
        ptag.style.marginTop = '50px'
      }else{
        ptag.innerText = "";
      }
  })
}
allBtn();


let btn = document.createElement("button");
btn.innerText = 'click me';
btn.style.backgroundColor = 'blue'
btn.style.color = 'white'
btn.style.width = '100px'
btn.style.fontSize = '20px'
btn.style.padding = '5px'
btn.style.marginLeft = '50%'
btn.style.fontSize = '20px'
document.querySelector("body").after(btn);
let createinput = document.createElement("input");
createinput.setAttribute("type", "text");
createinput.setAttribute("Id", "access");
document.querySelector("body").append(createinput)
btn.addEventListener('click', function(){
  let create = document.createElement("h2");
  create.innerText = access.value;
  document.querySelector("body").append(create);
});


