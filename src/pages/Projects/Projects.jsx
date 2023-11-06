import "./Projects.css";

function Projects() {
  return (
    <>
      <p className="hello">Projects</p>
      <div className="projectsContainer">
        <div className="project">
          <p className="title">Cat Bed</p>
          <p>Techs used: HTML, CSS, JS, canvas</p>
          <p>
            <a
              href="https://sunredynl.github.io/cat-game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed
            </a>
          </p>
          <p>
            {" "}
            <a
              href="https://github.com/SunredyNL/cat-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </p>
        </div>
        <div className="project">
          <p className="title">Gaming BMO</p>
          <p>
            Techs used: Mock backend API, React(Vite), JS, restApi(external)
          </p>
          <p>
            {" "}
            <a
              href="https://gaming-bmo.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed
            </a>
          </p>
          <p>
            {" "}
            <a
              href="https://github.com/SunredyNL/max-krys-project2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          </p>
        </div>
        <div className="project">
          <p className="title">SelfCheck</p>
          <p>
            Techs used: Full-stack MERN, React(Vite), JS, models, Routes, Auth,
            Full user signup/signin
          </p>
          <p>
            {" "}
            <a
              href="https://selfcheckproject.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed
            </a>
          </p>
          <p>
            {" "}
            <a
              href="https://github.com/SunredyNL/selfcheck-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo Frontend
            </a>
          </p>
          <p>
            {" "}
            <a
              href="https://github.com/Lidiamfg/selfcheck-backend "
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo Backend
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
