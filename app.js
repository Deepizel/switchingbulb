
    const img1 = document.querySelector(".lighton");
    const img2 = document.querySelector(".lightoff");
    const btn1 = document.querySelector(".onswitch");
    const btn2 = document.querySelector(".offswitch");

img1.addEventListener("click", () => {
    img1.style.display = 'none';
    img2.style.display = "block";
});

img2.addEventListener("click", () => {
  img1.style.display = "block";
  img2.style.display = "none";
});