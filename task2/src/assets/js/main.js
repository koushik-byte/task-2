document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("scroll", function() {
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});

const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let el of reveals) {
    let rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  }
});
