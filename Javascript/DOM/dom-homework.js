

const h1 = document.createElement("h1");
const p = document.createElement("p");
const ul = document.createElement("ul");
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

const h1Text = document.createTextNode("Welcome to DOM homework.");
const pText = document.createTextNode("This is your first DOM assignment.")
const liText1 = document.createTextNode("Stuff");
const liText2 = document.createTextNode("Things");
const liText3 = document.createTextNode("And whatnot");

h1.appendChild(h1Text);
p.appendChild(pText)




const div = document.getElementById("myDiv");
div.appendChild(h1);
div.appendChild(p);

li1.appendChild(liText1)
ul.appendChild(li1)
div.appendChild(ul);
li2.appendChild(liText2)
ul.appendChild(li2)
div.appendChild(ul);
li3.appendChild(liText3);
ul.appendChild(li3)
div.appendChild(ul);

div.classList.add("highlight");
/*
<button onclick="myFunction()">Try it</button>

function myFunction() {
    var x = document.createElement("li");
    var t = document.createTextNode("And the List goes on and on");
    x.appendChild(t);
    document.getElementById("myList").appendChild(x);
  }
  */