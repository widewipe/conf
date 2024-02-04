const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");
const p6 = document.querySelector("#p6");
const p7 = document.querySelector("#p7");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const curPg = document.querySelector(".curPg");

const pages = [p1, p2, p3, p4, p5, p6, p7];

var ind = 0;

const nextFn = () => {
  if (ind === pages.length - 1) {
    return;
  } else {
    curPg.innerHTML = ind + 2;

    pages[ind].style.display = "none";
    ind = ind + 1;
    pages[ind].style.display = "flex";
  }
};

const prevFn = () => {
  if (ind === 0) {
    return;
  } else {
    curPg.innerHTML = ind;

    pages[ind].style.display = "none";
    ind = ind - 1;
    pages[ind].style.display = "flex";
  }
};

next.addEventListener("click", nextFn);

// next.addEventListener("click", function (e) {
//   if (ind === pages.length - 1) {
//     return;
//   } else {
//     curPg.innerHTML = ind + 2;

//     pages[ind].style.display = "none";
//     ind = ind + 1;
//     pages[ind].style.display = "flex";
//   }
// });

prev.addEventListener("click", prevFn);

document.addEventListener("keydown", function (e) {
  if (e.code === "ArrowRight") {
    nextFn();
  } else if (e.code === "ArrowLeft") {
    prevFn();
  }
});
