import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

import { TfiBackRight } from "react-icons/tfi";
import "./styles/About.css";

function About() {
  const size = useWindowSize();

  return (
    <main className="about--container">
      <div className="about--content container-fluid">
        <main className="row">
          <div className="col-xl-6">
            <h4>krzysztof radzieta</h4>
            <p>
              I am a third-year student of computer science at the Tarnów
              Academy of Applied Sciences. for the past year and a half, i have
              been working as a web publisher and manul tester for the largest
              polish portal with online training. as of december 2022, i started
              working as a junior react developer for an american company that
              builds online stores. my favorite technology is reactjs. i love to
              write front end applications. i can express myself artistically
              this way and the results of the work can be seen as soon as the
              code is written. my skills will allow you to make your site
              compliant, so that it will appear more often in searches. if you
              want me to take care of your site, create a new one or have any
              other question about your space on the Internet - contact me. in
              the contact tab you can directly send me an email.
            </p>
          </div>
          <div className="col-xl-6">
            <img
              className="about--img"
              src="https://media-exp1.licdn.com/dms/image/D4D03AQFu8VlfgMz1Dg/profile-displayphoto-shrink_800_800/0/1668947758201?e=1676505600&v=beta&t=bb4xz1xAmCLWvuOAU-9s9EmblcCLb1JC82SjVbOvl2g"
              alt="it's me"
            />
          </div>
        </main>
      </div>
      <nav className="about--nav">
        <Link to="/" className="about--link">
          <TfiBackRight size={size.width >= 480 ? 40 : 30} />
        </Link>
      </nav>
    </main>
  );
}

export default About;
