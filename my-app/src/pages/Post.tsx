import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppState } from "../store";
import { PostState } from "../store/post/types";

interface Props {
  post: PostState;
}
const Post: React.FC<Props> = ({ post }) => {
  const [goBack, setGoBack] = useState(false);

  const back = () => {
    setGoBack(true);
  }

  if(goBack) return <Redirect to='/users'/>
  return (
    <div>
      <div>
        <div className="post">
          <div>
            <button style={{width:'20%', backgroundColor:'#9a56c2',color:'white',cursor:'pointer',  borderRadius: '20px',fontSize: '22px', marginTop:'2%', marginLeft:'1%'}} onClick={back}>Go back</button>
          </div>
          <div className="profile-header">
            <div >
              <h2>Post Detail</h2>
              <h4>{post.selectedPost?.title}</h4>
            </div>
          </div>
          <div>
            <div className="lower-container">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  post: state.post,
});

export default connect(mapStateToProps, {})(Post);
