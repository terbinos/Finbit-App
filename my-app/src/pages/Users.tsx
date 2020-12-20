import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AppState } from "../store";
import { UsersState } from "../store/users/types";
import { IUser } from "../store/users/types";
import {
  thunkGetUsers,
  thunkGetUserPost,
  thunkGetUserComments,
  thunkSetInitialValue,
} from "../store/users/actions";
import { thunkSetSelectedPost} from '../store/post/actions';
import Profile from "./Profile";

interface Props {
  users: UsersState;
  thunkGetUsers: any;
  thunkGetUserPost: any;
  thunkGetUserComments: any;
  thunkSetInitialValue: any;
  thunkSetSelectedPost: any;
}
const Users: React.FC<Props> = ({
  users,
  thunkGetUsers,
  thunkGetUserPost,
  thunkGetUserComments,
  thunkSetInitialValue,
  thunkSetSelectedPost,
}) => {
  const [userProfile, setUserProfile] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    thunkGetUsers();
  }, [thunkGetUsers]);

  const changeView = (user: IUser | null, loadData: boolean) => {
    !userProfile && setUser(user);
    if (loadData) {
      thunkSetInitialValue();
      thunkGetUserPost(user?.id!);
      thunkGetUserComments(user?.id!);
    }
    setUserProfile(!userProfile);
  };

  return userProfile ? (
    <div>
      <div className="profileButton" onClick={() => changeView(null, false)}>
        Back to Users Lists
      </div>
      <Profile
        user={user!}
        posts={users?.userPosts!}
        comments={users?.userComments!}
        initialValue={users?.initialValue!}
        thunkSetSelectedPost={thunkSetSelectedPost}
      />
    </div>
  ) : (
    <div>
      <div className="cards">
        {users.users?.map((user) => {
          return (
            <div className="card">
              <div className="card__content">
                <div>
                  <div className="upper-container">
                    <div className="image-container">
                      <img
                        src={`https://ui-avatars.com/api/?name=${user.name}`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="lower-container">
                    <div>
                      <h3>{user.name}</h3>
                      <h4>{user.email}</h4>
                      <h4>{user.phone}</h4>
                      <a
                        href={`http://${user.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {user.website}
                      </a>
                    </div>
                    <div></div>
                    <div className="card__info">
                      <div
                        className="profileButton"
                        onClick={() => changeView(user, true)}
                      >
                        View profile
                      </div>
                      <div className="button">
                        <a href="/posts" className="btn">
                          View posts
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  users: state.users,
});

export default connect(mapStateToProps, {
  thunkGetUsers,
  thunkGetUserPost,
  thunkGetUserComments,
  thunkSetInitialValue,
  thunkSetSelectedPost,
  
})(Users);
