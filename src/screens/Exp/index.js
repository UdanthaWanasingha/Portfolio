import React from "react";

function Exp() {
  return (
    <section className="section is-medium" id="Expertise" data-aos="fade-up">
      <h1
        className="hero-main-heading has-text-centered mb-0 "
        style={{ color: "white" }}
      >
        {" "}
        My Expertise{" "}
      </h1>
      <div className="rect ml-0 is-hidden-touch" data-aos="fade-up-right">
        <div className="container mr-6 is-5 is-hidden-touch">
          <img
            src="figma.png"
            className="image-skill-size figma-ai-html"
            alt=""
            srcSet
          />
          <div className="line "></div>
          <img src="xd.png" className="image-skill-size xd" alt="" srcSet />
          <div className="line "></div>
          <img
            src="ai.png"
            className="image-skill-size figma-ai-html"
            alt=""
            srcSet
          />
          <div className="line "></div>
          <img src="ps.png" className="image-skill-size ps" alt="" srcSet />
          <div className="line"></div>
          <img src="js.png" className="image-skill-size js" alt="" srcSet />
          <div className="line "></div>
          <img
            src="html.png"
            className="image-skill-size figma-ai-html"
            alt=""
            srcSet
          />
          <div className="line "></div>
        </div>
      </div>
      <div className="rect-mobile is-hidden-desktop">
        <div className="columns is-hidden-desktop">
          {/* <div class="rect"> */}
          <div className="column is-4-touch mx-auto" data-aos="zoom-in">
            <img src="figma.png" className alt="" srcSet />
          </div>
          <div className="column is-4-touch mx-auto" data-aos="zoom-in">
            <img src="xd.png" className alt="" srcSet />
          </div>
          <div className="column is-4-touch mx-auto" data-aos="zoom-in">
            <img src="ai.png" className alt="" srcSet />
          </div>
          <div className="column is-4-touch mx-auto" data-aos="zoom-in">
            <img src="ps.png" className alt="" srcSet />
          </div>
          <div className="column is-4-touch mx-auto" data-aos="zoom-in">
            <img src="js.png" className alt="" srcSet />
          </div>
          <div className="column is-4-touch mx-auto" data-aos="zoom-in">
            <img src="html.png" className alt="" srcSet />
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default Exp;
