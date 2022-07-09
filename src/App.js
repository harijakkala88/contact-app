import React, {useState, useEffect} from 'react';
import { v4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  
  const [contacts, setContacts] = useState([]);
  const [init, setInit] = useState(false);
  
  const addContactHandler = (contact) =>{
    setContacts([...contacts, {id: v4(), ...contact}]);
  }

const removeContactHandler = (id) =>{
  const newContactList = contacts.filter((contact)=>{
     return contact.id !== id;
  });
  setContacts(newContactList)
}


useEffect(() => {

if(!init) {
 const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(retriveContacts) {
        setContacts(retriveContacts);
      }
      setInit(true)
  }
    },[]);

useEffect(() => {
 if(init) {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
   }
  },[contacts]);

  return (
    <div className="ui container">
      <Router>
      <Header/>
      <Routes>
       <Route path="/add" element={<AddContact addContactHandler = {addContactHandler}/>} />
       <Route path="/" element={<ContactList contacts = {contacts} getContactId = {removeContactHandler}/>} />
      {/* <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts} getContactId = {removeContactHandler}/>
      */}
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
