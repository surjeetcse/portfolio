import React, { Component } from "react";
import Projects from "./sections/Projects";
import SocialProfiles from "./sections/SocialProfiles"

class App extends Component {
  state = { displayBio: false };
  // constructor() {
  //   super();
  //   this.state = { displayBio: false };
  //   // this.readMore = this.readMore.bind(this);
  //   // this.showLess = this.showLess.bind(this);
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  // toggleDisplayBio() {
  //   this.setState({ displayBio: !this.state.displayBio });
  // }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  // readMore() {
  //   console.log(this);
  //   this.setState({ displayBio: true });
  // }
  // showLess() {
  //   console.log(this);
  //   this.setState({ displayBio: false });
  // }
  render() {
    return (
      <div>
        <h6>Hello !</h6>
        <h2>My name is surjeet, i am software engineer</h2>
        {this.state.displayBio ? (
          <div>
            <h2>i live in banglore</h2>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />

        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
