const contactUs = () => {
  const contactUs = document.createElement("main");
    contactUs.classList.add("contact-us");
    contactUs.innerHTML = `
    <h4 class="h4heading"><strong>CONTACT<br>US</strong></h4>
    <p class="phone">Phone: (03)9458 1284 (Head Office)</p>
    <div class="stores">
      <div>
        <h4>QV Melbourne</h4>
        <p>Address:<br>
          Shop 20, level 1,<br>
          Cnr Swanston St & Lonsdale St,<br>
          Melbourne<br>
          <br>
          Opening Hours:<br>
          10am - 9pm (Mon-Thu)<br>
          10am - 10pm (Fri)<br>
          10:30am - 9pm (Sat)<br>
          10:30am - 8pm (Sun)
        </p>
      </div>
      <div>
        <h4>Box Hill</h4>
        <p>Address:<br>
          Kiosk 8 Boxhill Central<br>
          <br>
          Opening Hours:<br>
          10am - 7pm (Mon-Wed)<br>
          10am - 9pm (Thu-Fri)<br>
          10am - 5pm (Sat-Sun)
        </p>
      </div>
      <div>
        <h4>Chadstone</h4>
        <p>Address:<br>
          K025A Chadstone<br>
          Shopping Centre<br>
          <br>
          Opening Hours:<br>
          9:30am - 5.30pm (Mon-Wed)<br>
          9:30am - 9pm (Thu-Sat)<br>
          9:30am - 7pm (Sun)
        </p>
      </div>
      <div>
        <h4>Chinatown CBD</h4>
        <p>Address:<br>
          Shop 10B, 206 Bourke St,<br>
          Melbourne<br>
          <br>
          Opening Hours:<br>
          Temporarily not operating<br>
          11am - 10pm (Sun-Thu)<br>
          11am - 11pm (Fri-Sat)
        </p>
      </div>
      <div>
        <h4>Footscray</h4>
        <p>Address:<br>
          41 Leeds St, Footscray<br>
          <br>
          Opening Hours:<br>
          11:30am - 7.30pm (Mon-Sun)
        </p>
      </div>
      <div>
        <h4>Highpoint</h4>
        <p>Address:<br>
          Kiosk 710, 1 Level 1,<br>
          Highpoint Shopping Centre<br>
          <br>
          Opening Hours:<br>
          11am - 8pm (Mon)<br>
          11am - 9.30pm (Tue)<br>
          11am - 9pm (Wed)<br>
          11am - 10pm (Thu-Fri)<br>
          11am - 9.30pm (Sat)<br>
          11am - 9pm (Sun)
        </p>
      </div>
      <div>
        <h4>Pacific Werribee</h4>
        <p>Address:<br>
          Kiosk 31,<br>
          Pacific Werribee<br>
          Shopping Centre<br>
          <br>
          Opening Hours:<br>
          9:30am - 5.30pm (Mon-Wed)<br>
          9:30am - 9pm (Thu-Fri)<br>
          9am - 5.30pm (Sat)<br>
          10am - 5:30pm (Sun)
        </p>
      </div>
      <div>
        <h4>BUBBLECUP Fresh -
          Pacific Werribee</h4>
        <p>Address:<br>
          Kiosk 54,<br>
          Pacific Werribee<br>
          Shopping Centre<br>
          <br>
          Opening Hours:<br>
          9:30am - 5.30pm (Mon-Wed)<br>
          9:30am - 9pm (Thu-Fri)<br>
          9:30am - 6pm (Sat)<br>
          10am - 5:30pm (Sun)
        </p>
      </div>
      <div>
        <h4>Watergardens</h4>
        <p>Address:<br>
          Kiosk 41,<br>
          Watergardens Shopping Centre<br>
          <br>
          Opening Hours:<br>
          9:30am - 6pm (Mon-Wed)<br>
          9:30am - 7:30pm (Thu-Fri)<br>
          9:30am -6pm (Sat)<br>
          10am - 6pm (Sun)
        </p>
      </div>
      <div>
        <h4>Hoppers Crossing</h4>
        <p>Address:<br>
          Kiosk 4,<br>
          Hoppers Crossing<br>
          Shopping Centre<br>
          <br>
          Opening Hours:<br>
          10am - 5.30pm (Mon-Wed)<br>
          10am - 9pm (Thu-Fri)<br>
          9am - 5.30pm (Sat)<br>
          10am - 5:30pm (Sun)
        </p>
      </div>
      <div>
        <h4>Richmond</h4>
        <p>Address:<br>
          Shop 12,<br>
          Richmond<br>
          Shopping Centre<br>
          <br>
          Opening Hours:<br>
          10am - 5.30pm (Mon-Wed)<br>
          10am - 9pm (Thu-Fri)<br>
          9am - 5.30pm (Sat)<br>
          10am - 5:30pm (Sun)
        </p>
        </div>
      <div>
        <h4>Preston</h4>
        <p>Address:<br>
          663,<br>
          Plenty Rd<br>
          <br>
          Opening Hours:<br>
          10am - 5.30pm (Mon-Wed)<br>
          10am - 9pm (Thu-Fri)<br>
          9am - 5.30pm (Sat)<br>
          10am - 5:30pm (Sun)
        </p>
      </div>
    </div>
    `;
    return contactUs.innerHTML;
}

export { contactUs };