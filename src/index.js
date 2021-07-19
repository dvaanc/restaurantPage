import { loadPage } from "./loadPage";
import { menu } from "./menu";
import { contactUs } from "./contact";
import { homePage } from "./home";

(function () {
  loadPage();
  const homeNav = document.querySelector("#home");
  const menuNav = document.querySelector("#menu");
  const contactNav = document.querySelector("#contact");
  const main = document.getElementsByTagName("main");

  console.log(homePage.main())
  console.log(Array.from(main));

  homeNav.addEventListener("click", () => {
    main[0].className= '';
    main[0].classList.add("about-us");
    main[0].classList.add("show");
    main[0].innerHTML = homePage.main().innerHTML;
 
  });
  menuNav.addEventListener("click", () => {
    main[0].className= '';
    main[0].classList.add("menu");
    main[0].innerHTML = menu();
  });

  contactNav.addEventListener("click", () => {
    main[0].className= '';
    main[0].classList.add("contact-us");
    main[0].innerHTML = contactUs();
  });

})();