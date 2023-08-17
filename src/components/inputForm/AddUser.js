import "./AddUser.css";
import Card from "./Card";
import Button from "./Button";
import { useState } from "react";
import ErrorModal from "../errorModal/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Oops!",
        message: "You have not entered your name and age.",
      });
      // return stops the execution
      return;
    }
    if (+age < 0) {
      setError({
        title: "Invalid Input",
        message: "Age cannot be less than zero.",
      });
      return;
    }
    props.onAddUser(userName, age);
    setUserName("");
    setAge("");
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const handleModalDismiss = () => {
    // null is considered a falsy value
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismiss={handleModalDismiss}
        />
      )}
      <Card className="input">
        <form onSubmit={handleSubmit} className="input">
          <label className="label" htmlFor="username">
            User Name
          </label>
          <input
            // value clears input field after submit
            value={userName}
            type="text"
            id="username"
            onChange={handleUserName}
          ></input>
          <label className="label" htmlFor="age">
            Age
          </label>
          <input
            value={age}
            type="string"
            id="age"
            onChange={handleAge}
          ></input>
          <Button type="submit" text="Add User" />
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
