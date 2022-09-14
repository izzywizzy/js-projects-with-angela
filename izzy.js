var name = prompt("what is your name");
name;

var nameCaps = name.toUpperCase();
//nameCaps;

let name_first_letter = nameCaps.slice(0,1);
name_first_letter;
//name.length;

let name_rem = name.slice(1,name.length)
//name_rem = name_rem.toLowerCase();
alert("Hello " + name_first_letter + name_rem)
