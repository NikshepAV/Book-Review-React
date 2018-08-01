import React from 'react';

function Profile(props) {
  return (
    <div className="container">
      <div className="text-center">
        <div className="profile-info">
          <img className="rounded"
               alt=""
               height="250"
               width="250"
               src={props.profileUser.image}/>
          <h4>{props.profileUser.name}</h4>
          <h4>{props.profileUser.email}</h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;