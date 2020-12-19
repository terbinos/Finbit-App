import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AppState } from "../store";
import { UsersState } from "../store/users/types";
import { thunkGetUsers } from "../store/users/actions";

interface Props {
  users: UsersState;
  thunkGetUsers: any;
}
const Users: React.FC<Props> = ({ users, thunkGetUsers }) => {
  const [userProfile, setUserProfile] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    thunkGetUsers();
  }, [thunkGetUsers]);

  const changeView = (name:string) => {
    !userProfile && setName(name);
    setUserProfile(!userProfile);
  };

  return userProfile ? (
    <div>
      <div className="profileButton" onClick={()=>changeView("")}>
        Back to Users Lists
      </div>
      <h5>Detail about {name}</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
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
                      <div className="profileButton" onClick={()=>changeView(user.name)}>
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
})(Users);
