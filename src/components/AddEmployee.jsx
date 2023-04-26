import { useState } from "react";

function AddEmployee() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Are you sure you want to add ${name}?`);
  };

  return (
    <div className="container mx-auto px-4 py-8 w-2/4">
      <form className="bg-white p-6 rounded-xl" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />{" "}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone No.
          </label>
          <input
            type="tel"
            id="phone"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Phone Number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
            Employee ID
          </label>
          <input
            type="number"
            id="id-number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Employee ID"
            value={id}
            onChange={(event) => setID(event.target.value)}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-purple-800 text-white py-2 px-4 rounded hover:bg-purple-900 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddEmployee;
