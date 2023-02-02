document.getElementById("a").onclick = function () {
  show("7");
};
document.getElementById("b").onclick = function () {
  show("8");
};
document.getElementById("c").onclick = function () {
  show("9");
};
document.getElementById("d").onclick = function () {
  show("/");
};
document.getElementById("e").onclick = function () {
  show("^");
};
document.getElementById("f").onclick = function () {
  show("4");
};
document.getElementById("g").onclick = function () {
  show("5");
};
document.getElementById("h").onclick = function () {
  show("6");
};
document.getElementById("i").onclick = function () {
  show("*");
};
document.getElementById("j").onclick = function () {
  show1();
};
document.getElementById("k").onclick = function () {
  show("1");
};
document.getElementById("l").onclick = function () {
  show("2");
};
document.getElementById("m").onclick = function () {
  show("3");
};
document.getElementById("n").onclick = function () {
  show("-");
};
document.getElementById("o").onclick = function () {
  show("%");
};
document.getElementById("pa").onclick = function () {
  show("0");
};
document.getElementById("q").onclick = function () {
  show(".");
};
document.getElementById("r").onclick = function () {
  document.getElementById("num").value = "";
};
document.getElementById("s").onclick = function () {
  show("+");
};

document.getElementById("t").onclick = function () {
  document.getElementById("num").value = eval(
    document.getElementById("num").value
  );
};
function show(x) {
  document.getElementById("num").value =
    document.getElementById("num").value + x;
}
function show1() {
  let present = document.getElementById("num").value;
  document.getElementById("num").value = present.substring(
    0,
    present.length - 1
  );
}
