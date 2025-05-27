import React from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

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
        {/* Get Context value in class-based component */}
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <User name={"First"} location={"Bangalore"} area={"Roopena Agrahara"} />
      </div>
    );
  }
}

export default About;
