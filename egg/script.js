var randominteger;

function run() {
  randominteger = (Math.floor(Math.random()*10+1));
  doit(randominteger);
}


function doit(i) {
 switch (i) {
    case 1:
    case 2:
    case 3:
      alert("No");
      break;
    case 4:
    case 5:
      alert("What a dumb question.");
      break;
    case 6:
    case 7:
      alert("Do you really expect me to respond seriously to such inane heap of letters you call a question?!");
      break;
    case 8:
    case 9:
    case 10:
      alert("Kidding me, you don't know this? Hahaha!");
      break;   
} 
  
}
