import { useState } from "react";
import styled from "styled-components";
import "./styles.css";

export default function App() {
  const [state1, setState1] = useState("auto auto auto");
  const Grid = styled.div`
    display: grid;
    grid-template-columns: ${state1};
    grid-template-rows: 1fr 1fr;
    width: 200px;
    height: 100px;
  `;
  const GridItem = styled.div`
    border: 1px solid black;
    text-align: center;
    padding: 20px;
    font-size: 30px;
  `;
  const Button = styled.div`
    border: 2px solid dodgerblue;
    padding: 10px;
    border-radius: 10px;
  `;
  return (
    <div className="App">
      <div>
        <Button
          contentEditable
          onKeyPress={(e) => {
            setState1(e.target.innerText);
          }}
        >
          {state1}
        </Button>
      </div>
      <Grid>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
        <GridItem>7</GridItem>
        <GridItem>8</GridItem>
        <GridItem>9</GridItem>
      </Grid>
    </div>
  );
}

const grid = () => (
  <div className="grid">
    <div className="grid-item">1</div>
    <div className="grid-item">2</div>
    <div className="grid-item">3</div>
    <div className="grid-item">4</div>
    <div className="grid-item">5</div>
    <div className="grid-item">6</div>
  </div>
);
