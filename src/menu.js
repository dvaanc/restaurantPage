const menu = () => {
  const menu = document.createElement("main");
    menu.classList.add("menu");
    menu.innerHTML = 
    `
      <h1>Menu</h1>
      <h4>Flavoured Milk Tea</h4>
      <ul>
        <li>Almond Milk Tea</li>
        <li>Longan & Red Date Milk Tea</li>
        <li>Black Sesame Milk Tea</li>
        <li>Lychee Milk Tea</li>
        <li>Caramel Milk Tea</li>
        <li>Mango Milk Tea</li>
        <li>Chocolate Milk Tea<br>(white)/dark/mocha)</li>
        <li>Matcha Milk Tea</li>
        <li>Coconut Milk Tea</li>
        <li>Strawberry Milk Tea</li>
        <li>Coffee Milk Tea</li>
        <li>Taro Red / Green Milk Tea</li>
        <li>Ginger Milk Tea</li>
        <li>Toffee Coffee Milk Tea</li>
        <li>Honeydew Milk Tea</li>
        <li>Watermelon Milk Tea</li>
      </ul>
      <h4>Milk Tea</h4>
      <ul>
        <li>Brown Sugar Milk Tea</li>
        <li>Japanese Rice Milk Tea</li>
        <li>Earl Grey Milk Tea</li>
        <li>Jasmine Green Milk Tea</li>
        <li>Oolong Milk Tea</li>
        <li>Premium Milk Tea</li>
      </ul>
      <h4>Fruity Tea</h4>
      <ul>
        <li>Grape</li>
        <li>Lychee</li>
        <li>Grapefruit</li>
        <li>Mango</li>
        <li>Apple</li>
        <li>Passionfruit</li>
        <li>Peach</li>
        <li>Lemon Aloe</li>
        <li>Strawberry</li>
      </ul>
      <h4>Smoothie</h4>
      <ul>
        <li>Berry Boost<br>(strawberry, blueberry, raspberry, apple juice, ice cream & fruit jelly)</li>
        <li>Banana <br>(banana, fresh yoghurt, ice cream & egg pudding)</li>
        <li>Cloud<br>(mango, coconut, matcha, ice cream & mango pop)</li>
        <li>Strawberry Yoghurt<br>(strawberry, fresh yoghurt, ice cream & strawberry pop ball)</li>
        <li>Cookie & Cream<br>(orea,m&m, white chocolate, ice cream & pearls)</li>
        <li>Sweet Love<br>(taro, banana, coconut, ice cream & red bean)</li>
        <li>Mango Passion<br>(mango, passionfruit, ice cream & mango jelly)</li>
      </ul>
    `;
    return menu.innerHTML;
}

export { menu };