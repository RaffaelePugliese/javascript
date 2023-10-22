const myTimeout = setTimeout(printName, 1000);

function printName() {
    var helloName ="Hello John"; 
    function inner() {
      console.log(helloName); 
    }
    inner();
  }

