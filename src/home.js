const content = document.querySelector(".content")

const header = () => {
  const header = document.createElement("header");
  // create elements to append to header
  const h1 = document.createElement("h1");
    h1.innerText = "iLuvBoba";
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const home = createButton("home", "Home");
  const menu = createButton("menu", "Menu");
  const contact = createButton("contact", "Contact");

  
// append in specific order
  header.appendChild(h1);
  header.appendChild(nav);
  nav.appendChild(ul);


// append header to .content div
  content.appendChild(header);
};

const createButton = (id, text) => {
  const button = document.createElement("li");
    button.id = id
    button.innerText = text;
    return button;

}
const img = () => {
  const img = document.createElement("img");
    img.src="images/banner-index.jpg"
    content.appendChild(img);
}

const main = () => {
  const main = document.createElement("main");
  const h4 = document.createElement("h4");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");


    main.innerHTML = `
    <h4><strong>ABOUT</strong></h4>
      <h1>iLuvBoba</h1>
      <p>iLuvBoba is Australia's newest and most innovative bubble tea outlet. <br>Our delicious selection of iced teas are shaking up the game like never before.</p>
    `;
}

const footer = () => {
  const footer = document.createElement("footer");
    footer.innerHTML = `
    <p>Copyright © 2021. Web Design by dvaanc.</p>
    `;
}

export { header, img, main, footer }