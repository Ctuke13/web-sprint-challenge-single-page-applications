import styled from "styled-components";

const StyledLogo = styled.img`
  display: flex;
  height: 500px;
  width: 500px;
  margin: auto;
`;
const StyledPhoneNumber = styled.label`
    display: flex;
   justify-content: center;
    font-size: 35px;
  }
`;

export default function Home() {
  return (
    <div>
      <StyledLogo
        src="https://static.vecteezy.com/system/resources/previews/005/513/436/original/pizza-delicious-design-premium-logo-vector.jpg"
        alt=""
      />
      <StyledPhoneNumber>
        Phone Number: <span>XXX-XXX-XXXX</span>
      </StyledPhoneNumber>
    </div>
  );
}
