import styled from "styled-components";

const StyledToppings = styled.div`
  display: flex;
  
  gap 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .errors {
    color: red;
    mari
  }
`;

export default function OrderForm({ newOrder, change, submit, errors }) {
  return (
    <StyledForm onSubmit={submit} id="pizza-form">
      <label>
        Name:&nbsp;
        <input
          onChange={change}
          id="name-input"
          type="text"
          name="name"
          placeholder="Enter Full Name"
          data-cy="name"
          value={newOrder.name}
        ></input>
      </label>
      <span className="errors">{errors.name}</span>
      <br />
      <label>
        Pizza Size:&nbsp;
        <select
          id="size-dropdown"
          name="size"
          value={newOrder.size}
          onChange={change}
        >
          <option value="">--Please choose an option--</option>
          <option value={"Small"}>Small</option>
          <option value={"Medium"}>Medium</option>
          <option value={"Large"}>Large</option>
        </select>
      </label>
      <span className="errors">{errors.size}</span>
      <br />
      <StyledToppings>
        <div className="toppings">
          <input
            type="checkbox"
            id="pepperoni"
            name="pepperoni"
            data-cy="pepperoni"
            onChange={change}
          />
          <label htmlFor="pepperoni">Pepperoni</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="sausage"
            name="sausage"
            data-cy="sausage"
            onChange={change}
          />
          <label htmlFor="sausage">Sausage</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="jalepenos"
            name="jalepenos"
            data-cy="jalepenos"
            onChange={change}
          />
          <label htmlFor="jalepenos">Jalepenos</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="mushrooms"
            name="mushrooms"
            data-cy="mushrooms"
            onChange={change}
          />
          <label htmlFor="mushrooms">Mushrooms</label>
        </div>
      </StyledToppings>
      <span className="errors">
        {errors.pepperoni}
        {errors.sausage}
        {errors.jalepenos}
        {errors.mushrooms}
      </span>
      <br />
      <label>
        Special Instructions:&nbsp;
        <input
          id="special-text"
          type="text"
          name="special"
          placeholder="Instructions"
          onChange={change}
        ></input>
      </label>
      <span className="errors">{errors.special}</span>
      <br />
      <button data-cy="order-button" id="order-button">
        Order
      </button>
    </StyledForm>
  );
}
