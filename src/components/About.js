import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1> About Class Component</h1>
        <div>
          loggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="text-2xl">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass
          name={"Hammad Afzal (Class)"}
          location={"Bostan"}
          contact={"hammad@gmail.com"}
        />
      </div>
    );
  }
}
export default About;
