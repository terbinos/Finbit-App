import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../store";
import { PostState } from "../store/post/types";

interface Props {
  post: PostState;
}
const Post: React.FC<Props> = ({ post }) => {
  return (
    <div style={{ margin: "20%" }}>
      <div>
        <Link to="/users">Go back</Link>
      </div>
      {post.selectedPost?.title}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  post: state.post,
});

export default connect(mapStateToProps, {})(Post);
