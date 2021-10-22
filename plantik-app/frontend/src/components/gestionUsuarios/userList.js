import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./userList.css";
//Importaciones Freddy

import api from "../../api";
import { useEffect, useState } from "react";

export const UserList = () => {
  //Router Freddy

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.users.list();
      setUsers(response);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5 mb-5">LISTA USUARIOS</h1>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>1</td>
                  <td>{user.Nombres}</td>
                  <td>{user.Apellidos}</td>
                  <td>{user.Email}</td>
                  <td>{user.Rol}</td>
                  <td>{user.Estado}</td>
                  <td>
                    <Link to={`/GestionUsuarios/${user._id}`}>
                      <Button
                        variant="warning"
                        //onClick={popProduct}
                        id={user._id}
                        className="ms-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
