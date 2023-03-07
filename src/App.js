import React, { useEffect } from "react";
import "./App.css";
import AboutMe from "./screens/AboutMe";
import ContactMe from "./screens/ContactMe";
import Education from "./screens/Education";
import Exp from "./screens/Exp";
import HomeSec from "./screens/HomeSec";
import MyFooter from "./screens/MyFooter";
import MyHeader from "./screens/MyHeader";
import MyWorks from "./screens/MyWorks";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <MyHeader />
      <HomeSec />
      <AboutMe />
      <Education />
      <Exp />
      <MyWorks />
      <ContactMe />
      <MyFooter />
    </>
  );
}

export default App;
