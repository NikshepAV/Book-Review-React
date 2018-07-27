import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <div className="profile-info">
                        <img className="rounded"
                             alt=""
                             height="250"
                             width="250"
                             src={this.props.profileUser.image}/>
                        <h4>{this.props.profileUser.name}</h4>
                        <h4>{this.props.profileUser.email}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;