import React from "react";
import avatar from "../images/avatar.jpg";

const ContactCard = (props) => {
    const {id, name, email} = props.mycontact;
    return (
        <div className="item">
            <img className="ui avatar image" src = {avatar} alt="avatar" />
                <div className="content">
                    <div className="header">{id}</div>
                    <div>{name}</div>
                    <div>{email}</div>
                    <i className="trash alternate outline icon"
                    style={{color: "red", margintop: "7px"}}></i>
                </div>
        </div>
    );
}

export default ContactCard;