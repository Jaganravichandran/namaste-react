import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    //console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;
