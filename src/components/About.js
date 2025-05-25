import React from "react";
import User from "./User";

class About extends React.Component {
  constructor() {
    super();

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount called");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us Page</h1>
        <User name={"First"} location={"Bangalore"} area={"Roopena Agrahara"} />
        <User
          name={"Second"}
          location={"Bangalore"}
          area={"Roopena Agrahara"}
        />
      </div>
    );
  }
}

export default About;

/* 
  - Parent Constructor
  - Parent Render
    - First Child Constructor
    - First Child Render
      - User Class Constructor
      - User Class Render
        - Third Child Constructor
        - Third Child Render
    - Second Child Constructor
    - Second Child Render
      - User Class Constructor
      - User Class Render
        - Third Child Constructor
        - Third Child Render

    - Third Child Component Did Mount called
    - User Class Component Did Mount called
    - First Child Component Did Mount called
    - Third Child Component Did Mount called
    - User Class Component Did Mount called
    - Second Child Component Did Mount called
  - Parent Component Did Mount Called

*/
