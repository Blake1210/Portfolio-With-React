import React from "react";

function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Blake Peterson</h2>
          <ul>
            <li>
              Core competencies in enterpirse content management, full-stack web
              development, data architecture, and managing integrations.
            </li>
          </ul>

          <p class="mt-5">
            <a href="https://www.linkedin.com/in/blake-peterson-61b11a158/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </p>

          <a
            href="https://drive.google.com/file/d/1cjZiq30vuNWZN6vpkMffKMCEtjKaPm70/view?usp=sharing"
            download="file"
            class="link"
          >
            Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, APIs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;