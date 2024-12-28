import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useInfo: {},
    };

    //console.log("Child Constructor");
  }

  async componentDidMount() {
    //console.log("Child Component Did Mount");
    //API

    const data = await fetch("https://api.github.com/users/Jaganravichandran");
    const json = await data.json();

    this.setState({
      useInfo: json,
    });
  }

  componentDidUpdate() {
    //console.log("Child Component did update");
  }

  render() {
    const { name, location } = this.state.useInfo;
    //console.log("Child Render");
    return (
      <div className="user-card">
        <h1>name : {name}</h1>
        <h2>location : {location}</h2>
      </div>
    );
  }
}

export default UserClass;
