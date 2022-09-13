import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import Userlist from "./Components/Users/Userlist";

function App() {
  const [userslist, setUserslist] = useState([]);
  const AddUserHandler = (uName, uAge) => {
    setUserslist((prevUserslist) => {
      return [
        ...prevUserslist,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <Userlist users={userslist} />
    </div>
  );
}

export default App;
