import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ state1 }) => state1};
  grid-template-rows: ${({ state2 }) => state2};
  grid-template-areas: "${({ state3 }) => state3}";
  width: 200px;
  height: 100px;
`;

export const GridItem = styled.div`
  border: 1px solid black;
  text-align: center;
  padding: 20px;
  font-size: 30px;
  grid-area: ${({ gridArea }) => gridArea};
`;
export const Button = styled.div`
  border: 2px solid dodgerblue;
  padding: 10px;
  border-radius: 10px;
  text-decoration: ${({ show }) => (show ? "line-through" : "none")};
  user-select: none;
`;
export const Input = styled.input`
  height: 30px;
  border: none;
  font-size: 15px;
  margin-left: 10px;
  width: 100px;
  &:focus {
    outline: none;
  }
`;
