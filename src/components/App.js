// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Rohit",
      email: "rohit@gmail.com"
    },
    {
      id: "2",
      name: "Kuhar",
      email: "kuhar@gmail.com"
    }
  ]
  return (

    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList mycontacts={contacts} />
    </div>
  );
}

export default App;
