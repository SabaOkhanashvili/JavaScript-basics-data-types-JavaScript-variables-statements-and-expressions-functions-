function checkEquality() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var output = document.getElementById("output");
  
    if (a == b) {
      output.innerHTML = "Equal to";
    } else {
      output.innerHTML = "It is not equal";
    }
  }
  