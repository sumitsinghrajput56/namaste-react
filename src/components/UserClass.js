import React from "react";

class UserClass extends React.Component {
    
    constructor (props) {
        super (props);

    }

    render() {
        const {name, location} = this.props;
       return (<div className="user-card">
        <h2>name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @akshaymarch7</h2>
    </div>)
    }
}

export default UserClass;