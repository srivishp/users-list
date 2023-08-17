import React, { useState } from "react";
import AddUser from "../src/components/inputForm/AddUser";
import UsersList from "./components/usersList/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleUsersList = (userName, age) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={handleUsersList} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
