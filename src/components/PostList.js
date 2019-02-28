import React from "react";
import { fetchPosts } from "../reducers/postReducer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderList = () => {
    return this.props.posts.map(post => {
      return (
        <div key={post.id} className="item">
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return state.post;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPosts: fetchPosts }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
