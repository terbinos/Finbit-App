import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { AxAsync } from "../config";
import { IUser, IUserComments, IUserPosts } from "../store/users/types";
import { Charts } from "./Chart";

interface Props {
  user: IUser;
  posts: IUserPosts[];
  comments: IUserComments[];
  initialValue: number;
  thunkSetSelectedPost: any;
  thunkUpdateVIP: any;
  thunkUpdateCommentsOff: any;
}
const Profile: React.FC<Props> = ({
  user,
  posts,
  comments,
  initialValue,
  thunkSetSelectedPost,
  thunkUpdateVIP,
  thunkUpdateCommentsOff,
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
  const [commentsOnPosts, setCommentsOnPosts] = useState<number[]>([]);
  const [labels, setLabels] = useState<number[]>([]);
  const vipChange = () => {
    thunkUpdateVIP(!user?.isVIP!);
  };

  const changeCommentSetting = (post: IUserPosts) => {
    thunkUpdateCommentsOff(post.id, !post.isCommentOff);
  };

  useEffect(() => {
    let tempPosts:number[] = [];
    let tempLebels:number[] = [];
    posts?.forEach(async (post: IUserPosts,i) => {
      const ax = await AxAsync();
      let res = await ax.get(
        `/posts/${post.id}/comments`
      );
      tempPosts.push(res.data.length);
      tempLebels.push(i+1);
      if (res.data.length >= maximumComments) {
        setMaximumComments(res.data.length);
        setMaximumCommentPost(post);
      }
      if (res.data.length <= minimumComments) {
        setMinimumComments(res.data.length);
        setMinimumCommentPost(post);
      }
    });
    setCommentsOnPosts(tempPosts);
    setLabels(tempLebels);
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
            <h2>User Detail</h2>
            <hr />
            <h3>{user?.name}</h3>
            {user?.isVIP! && (
              <p style={{ color: "green", fontWeight: "bold" }}>VIP</p>
            )}
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
            <input
              type="checkbox"
              checked={user?.isVIP!}
              onChange={vipChange}
            />
            <label style={{ marginLeft: "3%" }}>
              VIP
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="user-data">
            <h2>Company Detail </h2>
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
                  <th>Post ID</th>
                  <th>Post Title</th>
                  <th style={{textAlign:'center'}}>comments</th>
                </tr>
                {posts?.map((post,i) => {
                  return (
                    <tr>
                      <td>{i+1}</td>
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
                              onClick={() => changeCommentSetting(post)}
                            >
                              Turn {post?.isCommentOff ? 'ON' : 'OFF'}
                            </button>
                          
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div className="detail-box">
              <Charts data={commentsOnPosts} labels={labels} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
