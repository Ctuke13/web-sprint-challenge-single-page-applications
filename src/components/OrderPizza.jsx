import OrderForm from "./OrderForm";
import styled from "styled-components";

const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default function OrderPizza({ newOrder, change, submit, errors }) {
  return (
    <>
      <StyledTitle>Order Pizza</StyledTitle>
      <StyledImage src="https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*" />
      <br />
      <br />
      <OrderForm
        change={change}
        submit={submit}
        newOrder={newOrder}
        errors={errors}
      />
    </>
  );
}
