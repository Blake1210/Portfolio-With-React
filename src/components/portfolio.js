import React from 'react'; 
import ProjectCards from './projects'
import portfolio from '../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section className="container">
          <div className="project">
            <h2 className="top-title">Bootcamp Portfolio</h2>
            <hr></hr>
          </div>

          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <ProjectCards key={project.id} name={project.project_name} github={project.github} deployed={project.deployed} topics={project.Topics}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;