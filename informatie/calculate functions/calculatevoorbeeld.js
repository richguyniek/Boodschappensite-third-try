function calculate(opreator,res) {
  var a,b;
  a = document.getElementById("text1").value;
  b = document.getElementById("text2").value;
  var result = eval(a+opreator+b);
  document.getElementById(res).value = result;
  return result;
}

function clear() {
  document.getElementById("calc").reset();
}