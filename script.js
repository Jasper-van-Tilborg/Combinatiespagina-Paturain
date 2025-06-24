// Wacht tot de DOM geladen is
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll voor de "Stuur in" knop
  const stuurInButton = document.querySelector(".stuur-in");
  if (stuurInButton) {
    stuurInButton.addEventListener("click", () => {
      // Hier kun je later de logica toevoegen voor het formulier
      console.log("Stuur in knop geklikt");
    });
  }

  // Filter knoppen functionaliteit
  const filterButtons = document.querySelectorAll(".bekijk-alles");
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Hier kun je later de filter logica toevoegen
      const filterType = e.target.parentElement.querySelector("h3").textContent;
      console.log(`Filter ${filterType} geklikt`);
    });
  });

  // Recipe card hover effect
  const recipeCards = document.querySelectorAll(".recipe-card");
  recipeCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Hier kun je later de logica toevoegen voor het openen van een recept
      console.log("Recept kaart geklikt");
    });
  });

  // Responsive menu toggle (voor mobiel)
  const createMobileMenu = () => {
    const nav = document.querySelector("nav");
    const mobileMenuButton = document.createElement("button");
    mobileMenuButton.classList.add("mobile-menu-button");
    mobileMenuButton.innerHTML = "☰";

    mobileMenuButton.addEventListener("click", () => {
      const navLinks = document.querySelector(".nav-links");
      navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
    });

    nav.insertBefore(mobileMenuButton, nav.firstChild);
  };

  // Voeg mobile menu toe als het scherm kleiner is dan 768px
  if (window.innerWidth < 768) {
    createMobileMenu();
  }

  // Update bij window resize
  window.addEventListener("resize", () => {
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    if (window.innerWidth < 768 && !mobileMenuButton) {
      createMobileMenu();
    } else if (window.innerWidth >= 768 && mobileMenuButton) {
      mobileMenuButton.remove();
      document.querySelector(".nav-links").style.display = "flex";
    }
  });
});
