import React, {useState} from "react";


function AboutMe(){
  const [readMore,setReadMore]=useState(false);

  const extraContent=<div>

      <p className="extra-content">

      Design is not just what it looks like and feels like. Design is how it works

      </p>

  </div>

  const linkName=readMore?'Read Less << ':'Read More >> '

  return (
          <div id="About-me">
            <section className="section is-medium">
              <div className="columns">
                <div
                  className="column is-5 is-align-self-center"
                  data-aos="fade-up-right"
                >
                  <h1 className="title is-1 mt-1 has-bold-text has-text-grey-lighter">
                    About <span className="this"> Me </span>
                  </h1>
                  <p className="subtitle mt-5 is-6 has-text-justified has-text-weight-medium has-text-grey-lighter">
                    As a UI UX designer, I am always striving to create interfaces
                    that are easy to use and look beautiful. I take into account the
                    user’s needs and wants when designing my interfaces, and I always
                    aim to create a positive user experience
                    <a className="
                                       
                    
                    " onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
                    {readMore && extraContent}
                  </p>
                </div>
                <div
                  className="column is-7 ml-6pt-5 has-text-centered"
                  data-aos="fade-up-left"
                >
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.8589870281885!2d79.9660027348877!3d7.025856500000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2f8fdce59f5e9%3A0x5324611c006ea7f6!2sImalka%20Reception%20Hall!5e0!3m2!1sen!2slk!4v1674626207124!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                  <img className="about-image" src="Capture3.PNG" />
                </div>
              </div>
            </section>
          </div>
  );
}
  
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});


export default AboutMe;
