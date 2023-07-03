import React, { useState } from "react";
import List from "./components/List";
import "./App.css";
import Input from "./components/Input";
import { useDispatch, useSelector } from "react-redux";
import { createUser, userUpdate } from "./redux/actions";

const App = () => {
  const [getInput, setInput] = useState({
    name: "",
    email: "",
    salary: "",
    gender: "",
  });
  const [getEdit, setEdit] = useState(false);
  const [getId,setId] = useState()

  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.appStore);

  const onChangeHandler = (e) => {
    setInput({ ...getInput, [e.target.name]: e.target.value });
  };

  // console.log(getInput)

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(getInput));
    setInput({ ...getInput, name: "", email: "", salary: "", gender: "" });
  };

  const onEdit = (index) => {
    setInput({
      ...getInput,
      name: users[index].name,
      email: users[index].email,
      salary: users[index].salary,
      gender: users[index].gender,
    });
    setEdit(true);
    setId(users[index].id)
  };

  const onUpdate = (e) =>{
    e.preventDefault();
    dispatch(userUpdate({getId,getInput}))
    setInput({ ...getInput, name: "", email: "", salary: "", gender: "" });
    setEdit(false)
  }

  return (
    <div>
      <Input
        onChangeHandler={onChangeHandler}
        onSubmit={onSubmit}
        getInput={getInput}
        getEdit={getEdit}
        onUpdate={onUpdate}
      />
      <List onEdit={onEdit} />
    </div>
  );
};

export default App;
