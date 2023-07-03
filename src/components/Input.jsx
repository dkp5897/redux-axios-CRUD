import React from "react";

const Input = ({ onChangeHandler, onSubmit, getInput, getEdit,onUpdate }) => {
  return (
    <div>
      <form>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={getInput.name}
          onChange={onChangeHandler}
        />
        Email:{" "}
        <input
          type="email"
          name="email"
          value={getInput.email}
          onChange={onChangeHandler}
        />
        Salary:{" "}
        <input
          type="text"
          name="salary"
          value={getInput.salary}
          onChange={onChangeHandler}
        />
        <div style={{ display: "flex" }}>
          Male:{" "}
          <input
            type="radio"
            name="gender"
            value={"male"}
            onChange={onChangeHandler}
          />
          Female:{" "}
          <input
            type="radio"
            name="gender"
            value={"female"}
            onChange={onChangeHandler}
          />
        </div>
        {getEdit ? (
          <button onClick={onUpdate}>Update</button>
        ) : (
          <button onClick={onSubmit}>Submit</button>
        )}
      </form>
    </div>
  );
};

export default Input;
