export function fetchEmployees() {
  return fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => data.results);
}
