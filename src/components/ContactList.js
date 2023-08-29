import React from "react";
import ContactCard from './ContactCard'

const ContactList = (props) => {
    // console.log(props);

    const renderContactList = props.mycontacts.map((mycontact) => {
        return (
        <ContactCard mycontact={mycontact}/>
        );
    }
    );
    return (
        <div className="ui celled list">{renderContactList}</div>
    );
}

export default ContactList;