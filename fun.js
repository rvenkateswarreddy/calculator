window.alert("Ready for simple calculations,click ok");
let a;
let b;
let c;
function common() {
  a = document.getElementById("number1").value;
  a = Number(a);
  b = document.getElementById("number2").value;
  b = Number(b);
}
document.getElementById("n1").onclick = function () {
  common();
  c = a + b;
  document.getElementById("result").value = c;
};
document.getElementById("n2").onclick = function () {
  common();
  c = a - b;
  document.getElementById("result").value = c;
};
document.getElementById("n3").onclick = function () {
  common();
  c = a * b;
  document.getElementById("result").value = c;
};
document.getElementById("n4").onclick = function () {
  common();
  c = a / b;
  document.getElementById("result").value = c;
};
document.getElementById("n5").onclick = function () {
  common();
  c = a % b;
  document.getElementById("result").value = c;
};
document.getElementById("n7").onclick = function () {
  common();
  a = String(a);
  b = String(b);
  c = a + b;
  document.getElementById("result").value = c;
};
document.getElementById("n8").onclick = function () {
  common();
  c = Math.pow(a, b);
  document.getElementById("result").value = c;
};
document.getElementById("n9").onclick = function () {
  common();
  c = Math.max(a, b);
  document.getElementById("result").value = c;
};
document.getElementById("n10").onclick = function () {
  common();
  c = Math.min(a, b);
  document.getElementById("result").value = c;
};
document.getElementById("n11").onclick = function () {
  common();
  c = Math.log(a);
  document.getElementById("result").value = c;
};
document.getElementById("n6").onclick = function () {
  document.getElementById("whole").innerHTML = "HAPPY SANKRANTHI";
  document.getElementById("whole").style.fontSize = "100px";
};
console.log("i have a work");
