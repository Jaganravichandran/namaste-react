import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name={"Jagan Ravichandran"} />
      <UserClass name={"Jagan Vasanth"} location={"Coimbatore"} />
    </div>
  );
};

export default About;
