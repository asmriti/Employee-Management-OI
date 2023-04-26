import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Employees(props) {
  const { users, search, setSearch } = props;
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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="flex bg-transparent border-4 rounded-xl h-12 items-center w-1/2 align-right p-4 text-center">
            <input
              className="text-center bg-transparent w-full outline-none text-start mr-2"
              placeholder="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <MagnifyingGlassIcon className="w-8 p-2 text-black" />
          </div>
          <Link to={`/employee/add/`}>
            <button className="p-6 py-1 bg-blue-800 text-white rounded hover:bg-blue-900 mr-4 text-lg">
              Add Employee
            </button>
          </Link>
        </div>
      </div>

      <table className="table-auto w-full border-collapse bg-white border-transparent rounded-xl content-center">
        <thead className="mt-4">
          <tr className="">
            <th className="px-4 py-2 text-left">Profile</th>
            <th className="px-4 py-2 text-left">Employee</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Gender</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id.value}>
              <td>
                <img
                  src={user.picture.thumbnail}
                  alt={`${user.name.title} ${user.name.first} ${user.name.last}`}
                  className="rounded-full m-2"
                />
              </td>
              <td>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.gender}</td>
              <td>
                <Link to={`/employee/edit/${user.email}`}>
                  <button className="p-6 py-1 bg-purple-800 text-white rounded hover:bg-purple-900 mr-4">
                    Edit
                  </button>
                </Link>
                <Link to={`/employee/delete/`}>
                  <button className="p-6 py-1 bg-red-800 text-white rounded hover:bg-red-900 mr-4">
                    Delete
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
