import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { IUser, IUserComments, IUserPosts } from "../store/users/types";

interface Props {
  user: IUser;
  posts: IUserPosts[];
  comments: IUserComments[];
  initialValue: number;
  thunkSetSelectedPost: any;
  thunkUpdateVIP: any;
}
const Profile: React.FC<Props> = ({
  user,
  posts,
  comments,
  initialValue,
  thunkSetSelectedPost,
  thunkUpdateVIP,
}) => {
  const [
    maximumCommentPost,
    setMaximumCommentPost,
  ] = useState<IUserPosts | null>(null);
  const [
    minimumCommentPost,
    setMinimumCommentPost,
  ] = useState<IUserPosts | null>(null);
  const [postRedirect, setPostRedirect] = useState(false);
  const [maximumComments, setMaximumComments] = useState(initialValue);
  const [minimumComments, setMinimumComments] = useState(initialValue);
  const [vip, setVip] = useState(false);
  const [comment, setComments] = useState(false);

  const vipChange = () => {
    setVip(!vip);
    thunkUpdateVIP(vip);
  };

  const changeCommentSetting = () => {
    setComments(!comment);
  };

  useEffect(() => {
    posts?.forEach(async (post: IUserPosts) => {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      );

      if (res.data.length >= maximumComments) {
        setMaximumComments(res.data.length);
        setMaximumCommentPost(post);
      }
      if (res.data.length <= minimumComments) {
        setMinimumComments(res.data.length);
        setMinimumCommentPost(post);
      }
    });
  }, [maximumComments, minimumComments, posts]);

  const getPost = (flag: boolean) => {
    flag
      ? thunkSetSelectedPost(maximumCommentPost)
      : thunkSetSelectedPost(minimumCommentPost);
    setPostRedirect(true);
  };

  const getPostDetail = (post: IUserPosts) => {
    thunkSetSelectedPost(post);
    setPostRedirect(true);
  };

  if (postRedirect) return <Redirect to="/posts" />;
  return (
    <div className="profile-main">
      <div className="profile-header">
        <div className="user-detail">
          <div className="user-image">
            <img src="http://nicesnippets.com/demo/up-profile.jpg" alt="" />
          </div>
          <div className="user-data">
            <h2 style={{ fontFamily: "times-new-roman" }}>User Detail</h2>
            <hr />
            <h3>{user?.name}</h3>
            {vip && <p style={{ color: "green", fontWeight: "bold" }}>VIP</p>}
            <p>
              <strong>{user?.email}</strong>
            </p>
            <p>
              <strong>{user?.phone}</strong>
            </p>
            <a
              href={`http://${user?.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user?.website}
            </a>
            <p>
              Address at <strong>{user?.address.city}</strong>
              <br />
            </p>
            <p>
              {user?.address.street},{user?.address.suite}
            </p>
            <input type="checkbox" checked={vip} onChange={vipChange} />
            <label style={{ marginLeft: "3%" }}>
              VIP
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="user-data">
            <h2 style={{ fontFamily: "times-new-roman" }}>Company Detail </h2>
            <hr />
            <h4>
              <strong>{user?.company.name}</strong>
            </h4>
            <p>{user?.company.catchPhrase}</p>
            <p>{user?.company.bs}</p>
          </div>
        </div>
        <div className="tab-panel-main">
          <div id="Basic-detail" className="tab-content current">
            <div className="skill-box">
              <ul>
                <li>
                  <strong>Post with most comments : </strong>
                </li>
                <li>
                  <button className="buttonPost" onClick={() => getPost(true)}>
                    {maximumCommentPost?.title}
                  </button>
                </li>
              </ul>
            </div>
            <div className="skill-box">
              <ul>
                <li>
                  <strong>Post with least comments : </strong>
                </li>
                <li>
                  <button className="buttonPost" onClick={() => getPost(false)}>
                    {minimumCommentPost?.title}
                  </button>
                </li>
              </ul>
            </div>
            <div className="bio-box">
              <div className="heading">
                <p style={{ fontWeight: "bold" }}>Social Activities</p>
              </div>
              <div className="summary">
                <div className="content2">
                  <span>{posts?.length!} </span>
                  <span> Posts</span>
                </div>
                <div className="content">
                  <span>{comments?.length!}</span>
                  <span> Comments</span>
                </div>
              </div>
            </div>
            <div className="detail-box">
              <table id="customers">
                <tr>
                  <th>Post Title</th>
                  <th>Show comments</th>
                </tr>
                {posts?.map((post) => {
                  return (
                    <tr>
                      <td>
                        {" "}
                        <button
                          style={{
                            cursor: "pointer",
                            // margin: "2%",
                            border: "none",
                            fontFamily: "Courier New, monospace",
                          }}
                          onClick={() => getPostDetail(post)}
                        >
                          {post.title}
                        </button>
                      </td>
                      <td>
                        {" "}
                        <div style={{ display: "flex" }}>
                          <button
                            className="turnoffButton"
                            onClick={changeCommentSetting}
                          >
                            Turn Off
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
