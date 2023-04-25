function DeleteEmployee() {
  return (
    <div className="container mx-auto px-4 py-8 w-2/4 bg-white mt-4">
      <h2 className="text-lg font-bold mb-4">Delete Employee</h2>
      <p className="mb-4">Are you sure you want to delete?</p>
      <button className="bg-red-800 text-white py-2 px-4 rounded hover:bg-red-900 focus:outline-none focus:shadow-outline">
        Delete
      </button>
    </div>
  );
}

export default DeleteEmployee;
