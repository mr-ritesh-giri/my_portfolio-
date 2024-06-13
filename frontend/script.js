let main = document.querySelector("body");
let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x - 150 + "px";
  cursor.style.top = dets.y - 150 + "px";
});

// const left = document.querySelector(".links");

// let rect = left.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);
