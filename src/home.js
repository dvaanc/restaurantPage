const content = document.querySelector(".content")
const homePage = (() => {

const header = () => {
  const header = document.createElement("header");
    header.innerHTML = 
    `<h1>iLuvBoba</h1>
    <nav class="nav">
      <ul>
        <li id="home">Home</li>
        <li>//</li>
        <li id="menu">Menu</li>
        <li>//</li>
        <li id="contact">Contact</li>
      </ul>
    </nav>
    `;

  content.appendChild(header);
};

const img = () => {
  const img = document.createElement("img");
    img.src="images/banner-index.jpg"
    content.appendChild(img);
}

const main = () => {
  const main = document.createElement("main");
    main.classList.add('about-us');
    main.innerHTML = 
    `
    <h4><strong>ABOUT</strong></h4>
    <h1>iLuvBoba</h1>
    <p>iLuvBoba is Australia's newest and most innovative bubble tea outlet. <br>Our delicious selection of iced teas are shaking up the game like never before.</p>
    <h4>OUR PROMISE</h4>
    <p>You Deserve Better Beverages</p>
    <p>We are a committed to not only provide the best beverage experience but also quality. Our teas are sourced from directly from Taiwan and we brew it fresh daily. </p>
    <p>We make your drinks when you order it and in front of you. </p>
    <p>And we are constantly searching for better quality ingredients and fresh new tastes that we can bring to you.</p>
    `;
    content.appendChild(main);
}

const footer = () => {
  const footer = document.createElement("footer");
    footer.innerHTML = 
    `
    <p>Copyright © 2021. Web Design by dvaanc.</p>
    `;
    content.appendChild(footer);
}

return { header, img, main, footer };
})();

export { homePage };