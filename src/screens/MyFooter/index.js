import React from "react";

function MyFooter() {
  return (
    <footer>
      <div className="columns ">
        <div className="coloumn is-6 mx-auto">
          <div className="field has-addons mx-auto is-justify-content-center">
            <p className="control mx-6">
              <span className="icon is-small">
                <i className="fas fa-home has-text-white" />
              </span>
              <span className="has-text-white mx-2 is-hidden-touch">Home</span>
            </p>
            <p className="control mx-6">
              <span className="icon is-small">
                <i className="fas fa-user has-text-white" />
              </span>
              <span className="has-text-white mx-2 is-hidden-touch">
                About me
              </span>
            </p>
            <p className="control mx-6">
              <span className="icon is-small">
                <i className="fas fa-phone has-text-white" />
              </span>
              <span className="has-text-white mx-2 is-hidden-touch">
                Contact
              </span>
            </p>
          </div>
          <div className="field has-addons mx-auto is-justify-content-center pb-6">
            <p className="control ">
              <span className="icon is-small mx-5">
                <a href="https://www.facebook.com/login.php">
                  <i className="fa-brands fa-facebook has-text-white" />
                </a>
              </span>
            </p>
            <p className="control">
              <span className="icon is-small mx-5">
                <a href="https://www.linkedin.com/in/udantha-wanasingha-814063201/">
                  <i className="fa-brands fa-linkedin has-text-white" />
                </a>
              </span>
            </p>
            <p className="control">
              <span className="icon is-small mx-5">
                <a href="https://mail.google.com/mail/u/0/#inbox">
                  {" "}
                  <i className="fa-solid fa-envelope has-text-white"> </i>
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
