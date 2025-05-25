import React from "react";
import User from "./User";

class About extends React.Component {
  constructor() {
    super();

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount called");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Us Page</h1>
        <User name={"First"} location={"Bangalore"} area={"Roopena Agrahara"} />
      </div>
    );
  }
}

export default About;
