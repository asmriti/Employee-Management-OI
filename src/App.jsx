import Employees from "./components/Employees";
import NavBar from "./components/NavBar";
import EditEmployee from "./components/EditEmployee";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { fetchEmployees } from "./services/employees";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEmployees().then((data) => setUsers(data));
  }, [setUsers]);

  if (!users) {
    return <div>Loading...</div>;
  }

  const filteredUsers = users.filter(
    (user) =>
      `${user.name.title} ${user.name.first} ${user.name.last}`
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.includes(search)
  );
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              users={filteredUsers}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route path="/edit" component={EditEmployee} />
      </Routes>
    </>
  );
}

export default App;
