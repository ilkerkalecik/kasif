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

  document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('a[href^="#"]');
    buttons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            // Linke ait varsayılan davranışı engelle
            event.preventDefault();

            // Linkin hedefini al
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Hedefe kaydır
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

window.addEventListener("load", function() {
  document.getElementById("loading-screen").style.display = "none";
  document.querySelector(".container").style.display = "block";
});