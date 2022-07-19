/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { v4 } from 'uuid';
import './App.css';
// import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ContactDetails from './components/ContactDetails';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  
  const [contacts, setContacts] = useState([]);
  const [init, setInit] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  
  const addContactHandler = (contact) =>{
    setContacts([...contacts, {id: v4(), ...contact}]);
  }

const removeContactHandler = (id) =>{
  const newContactList = contacts.filter((contact)=>{
     return contact.id !== id;
  });
  setContacts(newContactList)
}

const searchHandler = (tempSearch) =>{

        setSearchTerm(tempSearch);
};

useEffect(() => {

 if(searchTerm) {
 
  setSearchResults(contacts.filter(c => c.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ))
 }else{
  setSearchResults([])
 }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[searchTerm]);

useEffect(() => {

if(!init) {
 const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(retriveContacts) {
        setContacts(retriveContacts);
      }
      setInit(true)
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

useEffect(() => {
 if(init) {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
   }
  },[contacts]);

  return (
    <div className="ui container">
      <Router>
      {/* <Header/> */}
      <Routes>

       <Route path="/add" element={<AddContact addContactHandler = {addContactHandler}/>} />
             
       <Route path="/" 
        element ={<ContactList 
        contacts = {searchTerm.length < 1 ? contacts : searchResults} 
        getContactId = {removeContactHandler}
        term = {searchTerm}
        searchKeyword = {searchHandler}
        ></ContactList>} 
        />
      
       <Route path="/contact/:id" element={<ContactDetails contacts = {contacts}  />}/>
      
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
