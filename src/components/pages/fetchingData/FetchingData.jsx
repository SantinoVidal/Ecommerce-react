import { useEffect, useState } from "react";

const FetchingData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let promise = fetch("https://jsonplaceholder.typicode.com/users/");

    promise
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((er) => console.log(er))
      .finally(() => console.log("Proceso finalizado."));
  }, []);

  console.log(users);

  return (
    <div>
      <h4>Fetching de Data</h4>
    </div>
  );
};

export default FetchingData;
