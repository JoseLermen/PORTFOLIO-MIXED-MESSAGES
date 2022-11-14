document.getElementById("botao").onclick = function () {
  generator();
};

function generator() {
  const number = Math.floor(Math.random() * 10);
  if (number > 3) {
    document.getElementById("texto").innerHTML =
      "“Just one small positive thought in the morning can change your whole day.”";
  } else if (number > 6) {
    document.getElementById("texto").innerHTML =
      "“Opportunities don`t happen, you create them.”";
  } else {
    document.getElementById("texto").innerHTML =
      "“Love your family, work super hard, live your passion.”";
  }
}
