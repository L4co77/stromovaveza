document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    // Ovládanie hamburger menu
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  
    // Výber všetkých odkazov, ktoré obsahujú #
    const allLinks = document.querySelectorAll('a[href*="#"]');
  
    allLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href").substring(1); // Získanie ID cieľovej sekcie
        const targetSection = document.getElementById(targetId);
  
        // Ak existuje sekcia s daným ID, vykoná sa smooth scroll
        if (targetSection) {
          e.preventDefault(); // Zabraňuje predvolenému správaniu odkazu
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
          });
  
          // Zatvorenie hamburger menu, ak je otvorené
          navLinks.classList.remove("active");
          hamburger.classList.remove("open");
        }
      });
    });

    // const feed = new Instafeed({
    //     accessToken: '8a1434b1841c92707749e45b036174da', // Vložte svoj prístupový token
    //     limit: 12, // Počet obrázkov
    //     template: `
    //       <a href="{{link}}" target="_blank" class="instagram-post">
    //         <img src="{{image}}" alt="{{caption}}">
    //       </a>
    //     `,
    //   });
    //   feed.run();      
  });
  