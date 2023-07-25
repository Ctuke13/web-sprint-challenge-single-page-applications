import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import OrderPizza from "./OrderPizza";
import styled from "styled-components";

const StyledNav = styled.nav`
  * {
    display: flex;
  }

  .header {
    display: flex;
    height: 100px;
    justify-content: space-between;
    font-size: 16px;
    background-color: green;
    border-bottom: 1px solid black;
  }

  span {
    display: flex;
    padding: 10px;
    align-self: flex-end;
    font-size: 80px;
    color: red;
    text-shadow: 3px 3px 5px black, -1px -1px 5px #ff0000;
    font-family: "Lora", serif;
  }

  img {
    max-height: 100px;
    align-self: center;
  }

  .link-container {
    display: flex;
    justify-content: flex-end;
  }

  a {
    color: white;
    font-size: 35px;
    align-items: center;
    margin: 10px 35px;
  }
`;

export default function NavBar({ newOrder, change, submit, errors }) {
  return (
    <>
      <StyledNav>
        <header className="header">
          <img src="https://static.vecteezy.com/system/resources/previews/005/513/436/original/pizza-delicious-design-premium-logo-vector.jpg" />
          <span>Pizza Delicious</span>
          <div className="link-container">
            <Link to="/">Home</Link>&nbsp;
            <Link id={"order-pizza"} data-cy="pizza" to="pizza">
              Order Pizza
            </Link>
            &nbsp;
          </div>
        </header>
      </StyledNav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="pizza"
          element={
            <OrderPizza
              submit={submit}
              newOrder={newOrder}
              change={change}
              errors={errors}
            />
          }
        />
      </Routes>
    </>
  );
}
