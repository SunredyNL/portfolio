import "./HomePage.css";
import { Link } from "react-router-dom";
import KrystianPhoto from "../../assets/krystian.jpeg";
import CH from "../../assets/csshtml.png";
import git from "../../assets/git.png";
import mongo from "../../assets/mongo.png";
import react from "../../assets/react.png";
import restApi from "../../assets/restapi.png";
import vite from "../../assets/vite.png";
function HomePage() {
  return (
    <>
      <p className="hello">Welcome to my portfolio</p>
      <div className="homepageContainer">
        <img className="profilePic" src={KrystianPhoto} />
        <div>
          <div className="contact">
            <b>Contact information</b>

            <p>
              <b>E-mail</b>: krystianjnl@gmail.com
            </p>
            <p>
              <b>Phone number</b>: +31640697795
            </p>
            <p>
              <b>Github</b>:{" "}
              <a
                href="https://github.com/SunredyNL"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/SunredyNL
              </a>
            </p>
            <p>
              <b>LinkedIn Profile</b>:
              <a
                href="https://www.linkedin.com/in/krystian-jakubczyk-a56392119/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/krystian-jakubczyk-a56392119/
              </a>
            </p>
          </div>
          <div className="about">
            <b>About me</b>
            <p>
              Hey you! Thanks for checking out my portfolio.
              <br />
              Originally Polish, living in the Netherlands since 2016. Educated
              in JavaScript both frontend and backend. Trying to learn new
              coding languagues.
            </p>
          </div>
          <div className="edu">
            Education: Web Dev bootcamp via{" "}
            <a
              href="https://www.ironhack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ironhack
            </a>{" "}
            <a
              href="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/86284617"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate
            </a>
          </div>
        </div>
      </div>
      <div className="logos">
        <img className="techLogo" src={CH} />
        <img className="techLogo" src={git} />
        <img className="techLogo" src={mongo} />
        <img className="techLogo" src={react} />
        <img className="techLogo" src={restApi} />
        <img className="techLogo" src={vite} />
      </div>
    </>
  );
}

export default HomePage;
