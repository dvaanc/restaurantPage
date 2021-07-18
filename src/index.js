import { loadPage } from "./loadPage";
import { menu } from "./menu";



const app = (function () {
  loadPage();
  const homeNav = document.querySelector("#home");
  const menuNav = document.querySelector("#menu");
  const contactNav = document.querySelector("#contact");

  homeNav.addEventListener("click", () => {
    
  });
  menuNav.addEventListener("click", replaceMain(menu()))

  contactNav.addEventListener("click", () => {
    
  });

  const replaceMain = (func) => {
    let getMain = document.getElementsByTagName("main");
    getMain.parentNode.replaceChild(func, getMain)
  }
  
 
})();