import React from "react";

function ContactMe() {
  return (
    <div id="Contact-me" data-aos="fade-up-left">
      <section className="section is-medium">
        <div className="columns" data-aos="fade-up">
          <div className="column is-4 is-align-self-center ml-6 pl-5">
            <h1 className="title is-1 mt-1 has-bold-text has-text-grey-lighter">
              Got a project in <br />
              <span className="this"> mind ? </span>
            </h1>
            <img className="EQsecond" src="contact.png" />
          </div>
          <div className="column is-8 is-align-self-center ml-6">
            <div className="column is-7 is-align-self-center">
              <form className="contact-form">
                <div className="field">
                  <div className="columns">
                    <div className="column is-half">
                      <label className="label has-text-white">Your Name</label>
                      <div className="control">
                        <input
                          className="input has-text-white is-brand"
                          type="text"
                          placeholder="Eg: John Doe"
                          required
                        />
                      </div>
                    </div>
                    <div className="column is-half">
                      <div className="field" data-aos-duration={900}>
                        <label className="label has-text-white">
                          Your Email
                        </label>
                        <div className="control">
                          <input
                            className="input has-text-white is-brand"
                            type="email"
                            placeholder="Eg: John@doe.com"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-full">
                      <div className="field">
                        <label className="label has-text-white">Message</label>
                        <div className="control">
                          <textarea
                            className="textarea has-text-white is-brand"
                            placeholder="Your message here..."
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="field is-grouped">
                        <div className="control">
                          <button
                            className="button is-blue has-text-white form-submit-button"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                        <div className="control">
                          <button
                            className="button is-link is-light is-info is-outlined is-brand"
                            style={{ color: "aliceblue" }}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactMe;
