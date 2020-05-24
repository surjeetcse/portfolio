import React, { Component } from "react";
import PROJECTS from "./data/projects";

class Project extends Component {
  render() {
    console.log("this.props", this.props);
    const { id, title, desc, image, url } = this.props.project;
    return (
      <div style={{ display: "inline-block", width: 300, margin: 10 }}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <img src={image} alt={image} style={{ width: 300, height: 150 }}></img>
        <a href={url}>My profile</a>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Heighleted project</h2>
        <div>
          {PROJECTS.map((PROJECT) => {
            return <Project key={PROJECT.id} project={PROJECT} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
