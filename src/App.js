import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";

import NavBar from "./components/NavBar";

const App = () => {
  const [newOrder, setNewOrder] = useState({
    name: "",
    size: "",
    pepperoni: false,
    sausage: false,
    jalepenos: false,
    mushrooms: false,
    special: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    size: "",
    pepperoni: false,
    sausage: false,
    jalepenos: false,
    mushrooms: false,
    special: "",
  });

  const [post, setPost] = useState([]);

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Please enter name")
      .min(2, "name must be at least 2 characters"),
    size: Yup.string().required("Please select a pizza size"),
    pepperoni: Yup.boolean().oneOf([true, false]),
    sausage: Yup.boolean().oneOf([true, false]),
    jalepenos: Yup.boolean().oneOf([true, false]),
    mushrooms: Yup.boolean().oneOf([true, false]),
    special: Yup.string().nullable().defined(),
  });

  const inputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const infoUpdated = type === "checkbox" ? checked : value;

    if (type === "checkbox") {
      Yup.reach(schema, name)
        .validate(checked)
        .then(() => {
          setErrors((prevErrors) => {
            return { prevErrors, [name]: "" };
          });
        })
        .catch((err) => {
          setErrors((prevErrors) => {
            return { prevErrors, [name]: err.errors[0] };
          });
        });
      setNewOrder({
        ...newOrder,
        [name]: infoUpdated,
      });
    } else {
      Yup.reach(schema, name)
        .validate(value)
        .then(() => {
          setErrors({
            ...errors,
            [name]: "",
          });
        })
        .catch((err) => {
          setErrors({
            ...errors,
            [name]: err.errors[0],
          });
        });
      setNewOrder({
        ...newOrder,
        [name]: infoUpdated,
      });
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
        setNewOrder((prevUsers) => [prevUsers, res.data]);
      })
      .catch((err) => {
        console.error(err);
      });
    setNewOrder({
      name: "",
      size: "",
      pepperoni: false,
      sausage: false,
      jalepenos: false,
      mushrooms: false,
      special: "",
    });
  };

  return (
    <NavBar
      change={inputChange}
      submit={formSubmit}
      newOrder={newOrder}
      errors={errors}
    />
  );
};
export default App;
