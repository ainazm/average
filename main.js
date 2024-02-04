let submit = document.querySelector("button");
submit.addEventListener("click", function () {
  let vahed1 = Number(document.querySelector("input.vahed1").value);
  let vahed2 = Number(document.querySelector("input.vahed2").value);
  let vahed3 = Number(document.querySelector("input.vahed3").value);
  let vahed4 = Number(document.querySelector("input.vahed4").value);
  let vahed5 = Number(document.querySelector("input.vahed5").value);
  let vahed6 = Number(document.querySelector("input.vahed6").value);
  let signals = Number(document.querySelector("input.signals").value);
  let ai = Number(document.querySelector("input.ai").value);
  let algorithm = Number(document.querySelector("input.algorithm").value);
  let compiler = Number(document.querySelector("input.compiler").value);
  let memari = Number(document.querySelector("input.memari").value);
  let andishe = Number(document.querySelector("input.andishe").value);
  if (
    signals >= 0 &&
    signals <= 20 &&
    ai >= 0 &&
    ai <= 20 &&
    algorithm >= 0 &&
    algorithm <= 20 &&
    compiler >= 0 &&
    compiler <= 20 &&
    memari >= 0 &&
    memari <= 20 &&
    andishe >= 0 &&
    andishe <= 20
  ) {
    let Average = document.querySelector("input.Average");
    Average.value =
      (signals * vahed1 +
        ai * vahed2 +
        algorithm * vahed3 +
        compiler * vahed4 +
        memari * vahed5 +
        andishe * vahed6) /
      (vahed1 +
        vahed2 +
        vahed3 +
        vahed4 +
        vahed5 +
        vahed6);
    let result = Average.value;
    Average.innerHTML = result;
  } else {
    alert(" Numbers must be between 0 - 20!");
  }
});
