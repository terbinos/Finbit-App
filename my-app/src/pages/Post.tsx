import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppState } from "../store";
import { PostState } from "../store/post/types";
import { thunkGetPostComments } from "../store/post/actions";

interface Props {
  post: PostState;
  thunkGetPostComments: any;
}
const Post: React.FC<Props> = ({ post, thunkGetPostComments }) => {
  const [goBack, setGoBack] = useState(false);

  const back = () => {
    setGoBack(true);
  };

  useEffect(() => {
    thunkGetPostComments(post.selectedPost?.id);
  }, [post, thunkGetPostComments]);

  if (goBack) return <Redirect to="/users" />;
  return (
    <div>
      <div className="backButton" style={{width:'7.3%'}} onClick={back}>
        Back to Profile
      </div>
      <div className="profile-main" style={{ height: "100%" }}>
        <div className="user-detail">
          <h2>Post Detail</h2>
          <hr />
          <h4>Title</h4>
          <h5>
            <span style={{ fontWeight: "normal" }}>
              {post.selectedPost?.title}
            </span>
          </h5>
          <hr/>
          <h4>Body</h4>
          <h5>
            <span style={{ fontWeight: "normal" }}>
              {post.selectedPost?.title}
            </span>
          </h5>
          <hr/>
          <h4>Comments</h4>
          {/* <hr/> */}
          {post.postComments?.map((comment,i) => {
            return (
              <h5>{i+1}
                <span style={{ fontWeight: "normal" }}> {comment.body}</span>
              </h5>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  post: state.post,
});

export default connect(mapStateToProps, { thunkGetPostComments })(Post);
