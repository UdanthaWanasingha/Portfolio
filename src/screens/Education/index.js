import React from "react";

function Education() {
  return (
    <div id="Educational" data-aos="fade-up">
      <section className="section is-medium">
        <h1 className="title is-1 mt-1 has-bold-text has-text-grey-lighter">
          Educational <span className="this"> Qualifications </span>
        </h1>
        <div className="columns">
          <div
            className="column is-7 is-align-self-center"
            data-aos="fade-up-right"
          >
            <h4 className="subheadinEC">Bachelor Degree</h4>
            <p className="contentEC subtitle mt-5 is-6 has-text-justified has-text-weight-medium has-text-grey-lighter">
              Undergraduate in University OF Colombo School Of Computing <br />
              (BSC.Hons in Information Systems)
            </p>
            <h4 className="subheadinEC">Primary &amp; Secondary Education</h4>
            <p className="contentEC2 subtitle mt-5 is-6 has-text-justified has-text-weight-medium has-text-grey-lighter">
              I passed government exams ;<br />
              GCE Odinery Level exam with 1B &amp; 8A’s
              <br />
              GCE Advanced Level with 2C’s &amp; 1B
            </p>
          </div>
          <div
            className="column is-5 ml-5 has-text-centered"
            data-aos="fade-up-right"
          >
            <img className="EQfirst" src="educationalelements.png" />
            <img className="EQsecond" src="educationalelements2.png" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
