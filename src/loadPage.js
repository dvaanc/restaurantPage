import { homePage } from "./home";
const contentDiv = document.querySelector(".content");

const loadPage = () => {
  contentDiv.appendChild(homePage.header());
  contentDiv.appendChild(homePage.img());
  contentDiv.appendChild(homePage.main());
  contentDiv.appendChild(homePage.footer());
};

export { loadPage };
