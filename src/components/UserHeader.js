import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../reducers/userReducer";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return (
      <div>
        <p>{this.props.userId}</p>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(UserHeader);
