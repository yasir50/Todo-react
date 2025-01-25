import { useState } from "react";
import InputField from "./InputField";
import styles from "../Components/Todo.module.css";
import { Button } from "@mui/joy";
import Table from "@mui/joy/Table";

export default function Todo() {
  const [userObj, setUserObj] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    id: 0,
  });

  const [data, setData] = useState([]);

  const addTask = () => {
    if (
      userObj.emailAddress === "" ||
      userObj.firstName === "" ||
      userObj.lastName === "" ||
      userObj.id === 0
    ) {
      alert("Empty Field");
    } else {
      setData([...data, userObj]);
    }
    setUserObj({ id: "", firstName: "", lastName: "", emailAddress: "" });
  };

  const deleteAll = () => {
    setData([]);
  };

  const deleteTask = (id) => {
    const dt = data.filter((item) => item.id != id);
    setData(dt);
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.input2}>
          <InputField
            placeHolder={"Enter ID"}
            targetValue={(e) => {
              setUserObj({ ...userObj, id: e });
            }}
            values={userObj.id}
          />
        </div>
        <div className={styles.input1}>
          <InputField
            placeHolder={"First Name"}
            targetValue={(e) => {
              setUserObj({ ...userObj, firstName: e });
            }}
            values={userObj.firstName}
          />
          <InputField
            placeHolder={"Last Name"}
            targetValue={(e) => {
              setUserObj({ ...userObj, lastName: e });
            }}
            values={userObj.lastName}
          />
        </div>
        <div className={styles.InputField3}>
          <InputField
            placeHolder={"Email Address"}
            targetValue={(e) => {
              setUserObj({ ...userObj, emailAddress: e });
            }}
            values={userObj.emailAddress}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button size="sm" className={styles.button} onClick={addTask}>
            CREATE
          </Button>
          <Button
            onClick={deleteAll}
            size="sm"
            className={styles.button}
            sx={{ marginTop: "12px" }}
            color="danger"
          >
            DELETE ALL
          </Button>
        </div>
      </div>
      <div className={styles.table}>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>EMAIL ADDRESS</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.emailAddress}</td>
                <td>
                  <Button
                    onClick={() => deleteTask(item.id)}
                    size="sm"
                    color="danger"
                  >
                    DELETE
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
