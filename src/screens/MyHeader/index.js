import React from "react";

function MyHeader() {
  return (
    <header>
      <nav
        className="navbar is-brand"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand is-brand">
          <a className="navbar-item pl-6" href="#">
            <img src="first logos.jpg" className="image-nav" />
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="navbar-end mr-4-desktop">
          <div id="navbarBasicExample" className="navbar-menu bgcolor-brand">
            <div className="navbar-start pr-2 nav-white-shadow">
              <a className="navbar-item mr-5" href="#Home">
                {" "}
                About Me{" "}
              </a>
              <a className="navbar-item mr-5" href="#Expertise">
                {" "}
                Skills{" "}
              </a>
              <a className="navbar-item mr-5" href="#My-works">
                {" "}
                Projects{" "}
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="#Contact-me">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

export default MyHeader;
