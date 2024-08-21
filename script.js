document.querySelectorAll(".show-details").forEach((button) => {
  button.addEventListener("click", function () {
    var details = this.previousElementSibling;
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
      this.textContent = "Detayları Gizle";
    } else {
      details.style.display = "none";
      this.textContent = "Detayları Gör";
    }
  });
});


document.querySelectorAll(".show-detailscard").forEach((button) => {
  button.addEventListener("click", function () {
    var details = this.previousElementSibling;
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
      this.textContent = "Detayları Gizle";
    } else {
      details.style.display = "none";
      this.textContent = "Çeşitlerimiz ve Detaylar";
    }
  });
});
document.addEventListener("DOMContentLoaded"),
  () => {
    const categoryItems = document.querySelectorAll(".category-item");

    categoryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  };
