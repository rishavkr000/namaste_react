import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 1,
    };
    console.log(this.props.name + " Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " Child Component Did Mount called");
  }

  render() {
    console.log(this.props.name + " Child Render");
    const { name, area, location } = this.props;
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h1>Count1: {this.state.count1}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 10,
            });
          }}
        >
          Count Increment
        </button>
        <h2>Name: {name}</h2>
        <h3>Area: {area}</h3>
        <h4>Location: {location}</h4>
      </div>
    );
  }
}

export default User;
