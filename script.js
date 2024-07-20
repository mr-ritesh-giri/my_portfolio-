let main = document.querySelector("body");
let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.pageX - 150 + "px";
  cursor.style.top = dets.pageY - 150 + "px";
});
