import React from "react";

function MyWorks() {
  return (
    <div id="My-works" data-aos="fade-up">
      <section className="section is-medium">
        <h1 className="title is-1 mt-1 has-bold-text has-text-grey-lighter ml-6 pl-5 is-hidden-touch">
          My Recent <span className="this"> Works </span>
        </h1>
        <h1 className="title is-1 mt-1 has-bold-text has-text-grey-lighter is-hidden-desktop">
          My Recent <span className="this"> Works </span>
        </h1>
        <div className="field is-grouped is-rounded mt-6 ml-6 pl-5 is-hidden-touch">
          <p className="control">
            <button className="button is-blue is-rounded">All</button>
          </p>
          <p className="control">
            <button className="button is-outlined is-rounded is-primary">
              UI
            </button>
          </p>
          <p className="control">
            <button className="button is-outlined is-rounded is-primary">
              UX
            </button>
          </p>
          <p className="control ">
            <button className="button is-outlined is-rounded is-primary">
              Web Design
            </button>
          </p>
        </div>
        <div className="field is-grouped is-rounded mt-6 is-hidden-desktop">
          <p className="control">
            <button className="button is-blue is-rounded">All</button>
          </p>
          <p className="control">
            <button className="button is-outlined is-rounded is-primary">
              UI
            </button>
          </p>
          <p className="control">
            <button className="button is-outlined is-rounded is-primary">
              UX
            </button>
          </p>
          <p className="control ">
            <button className="button is-outlined is-rounded is-primary">
              Web Design
            </button>
          </p>
        </div>
        <div className="columns mt-6 ">
          <div className="column is-4">
            <div className="card p-6 card-background-rounded is-brand">
              <div className="card-image card-background">
                <figure className="image card-background is-600x440">
                  <img src="ui.png" alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card p-6 card-background-rounded is-brand">
              <div className="card-image card-background">
                <figure className="image card-background is-600x440 card-background-rounded">
                  <img src="ux.png" alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card p-6 card-background-rounded is-brand">
              <div className="card-image card-background">
                <figure className="image card-background is-600x440">
                  <img src="webdesign.png" alt="Placeholder image" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyWorks;
