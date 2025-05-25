import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child Component Did Mount called");

    const data = await fetch(" https://api.github.com/users/rishavkr000");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component will update called.")
    this.timer = setInterval(() => {
      console.log("SetInterval called")
    }, 1000)
  }

  componentWillUnmount(){
    console.log("Component Will unmount called.");
    clearInterval(this.timer);
  }

  render() {
    console.log(this.props.name + " Child Render");
    const { name, bio, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Bio: {bio}</h3>
        <h4>Location: {location}</h4>
      </div>
    );
  }
}

export default User;
