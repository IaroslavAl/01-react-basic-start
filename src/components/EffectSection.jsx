import useInput from "../hooks/useInput.js";
import Button from "./Button/Button";
import Modal from "./Modal/Modal.jsx";
import { useState, useEffect, useCallback } from "react";

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effects</h3>
      <Button style={{ marginBottom: "1rem" }} onClick={() => setModal(true)}>
        Открыть информацию
      </Button>
      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          eius recusandae ab iure voluptate possimus, aliquid praesentium nobis
          facere? Corporis ratione accusamus tempore ipsum soluta labore, nam
          recusandae incidunt dignissimos!
        </p>
        <Button onClick={() => setModal(false)}>Закрыть</Button>
      </Modal>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) =>
                user.name
                  .toLowerCase()
                  .includes(input.value.toLocaleLowerCase())
              )
              .map((user) => (
                <li key={user.id}>
                  <h4>{user.name}</h4>
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                </li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
