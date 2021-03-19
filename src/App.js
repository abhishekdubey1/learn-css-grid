import { useEffect, useState } from "react";
import * as Styled from "./StyledComponents";
import "./styles.css";

const GridComponent = ({ state1, state2, state3, gridArea }) => (
  <Styled.Grid state1={state1} state2={state2} state3={state3}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
      <Styled.GridItem
        key={el}
        className={`grid-item-${el}`}
        gridArea={gridArea[el]}
        style={{ gridArea: "" }}
      >
        {el}
      </Styled.GridItem>
    ))}
  </Styled.Grid>
);
const initialInputObject = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
};
export default function App() {
  const [state1, setState1] = useState("");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");
  const [inputObject, setInputObject] = useState(initialInputObject);

  return (
    <div className="App">
      <div>
        <div style={{ border: "1px solid black", paddingLeft: "10px" }}>
          <span>grid-template-columns:</span>
          <Styled.Input
            type="text"
            value={state1}
            onChange={({ target }) => setState1(target.value)}
          />
        </div>
        <div style={{ border: "1px solid black", paddingLeft: "10px" }}>
          <span>grid-template-rows:</span>
          <Styled.Input
            type="text"
            value={state2}
            onChange={({ target }) => setState2(target.value)}
          />
        </div>
        <div style={{ border: "1px solid black", paddingLeft: "10px" }}>
          <span>grid-template-areas:</span>
          <Styled.Input
            type="text"
            value={state3}
            onChange={({ target }) => setState3(target.value.toString())}
          />
        </div>
      </div>
      <div>
        <div className="item-grid-area">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
            <input
              key={el}
              type="text"
              value={inputObject[el]}
              className="grid-item-input"
              onChange={({ target }) => {
                let newObj = {};
                newObj[el] = target.value;
                setInputObject((obj) => ({ ...obj, ...newObj }));
              }}
            />
          ))}
        </div>
      </div>
      <GridComponent
        state1={state1}
        state2={state2}
        state3={state3}
        gridArea={inputObject}
      />
    </div>
  );
}
