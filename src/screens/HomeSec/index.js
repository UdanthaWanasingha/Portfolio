import React from "react";

function HomeSec() {
  return (
    <div id="Home">
      <section className="section p-0">
        <div className="columns is-mobile is-multiline" data-aos="fade-up">
          <div className="column is-6-mobile is-align-self-center is-11-mobile">
            <div className="has-text-weight-bold">
              <h1 className="is-size-4-desktop is-size-6-mobile ml-6 pl-5 mt-6 has-text-link has-text-weight-bold">
                Welcome to my sites
              </h1>
              <br />
              <h1 className="hero-main-heading hero-heading title ml-6 pl-5 has-text-link is-size-2-mobile ">
                Hi! I'm Indusara <br />
                UI UX <span className="is-brand-text"> Designer </span>
              </h1>
              <p className="ml-6 pl-5 subtitle mt-6 has-text-justified has-text-weight-medium has-text-grey-lighter is-0-mobile">
                What makes people passionate, pure and simple, is great
                experiences. If they have great experience with your product
                [and] they have great experiences with your service, they’re
                going to be passionate about your brand, they’re going to be
                committed to it. That’s how you build that kind of commitment
              </p>
            </div>
            <div className="buttons are-normal ml-6 pl-5 mt-6 ">
              <button className="button is-blue is-focused mr-5">
                Hire Me
              </button>
              <button className="button is-link is-outlined">
                See My Projects
              </button>
            </div>
          </div>
          <div className="column is-6-desktop  ml-5 has-text-centered ">
            <div className="section is-small">
              <div className="section is-small" data-aos="zoom-in">
                <figure className="image is-256x256 mt-6">
                  <img src="port.PNG" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSec;
