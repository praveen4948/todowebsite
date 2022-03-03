import React, { useState } from "react";
import "../App.css";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";

export const List = (props) => {
  const [line, setLine] = useState(false);
  const clicked = () => {
    if (line === true) setLine(false);
    else setLine(true);
  };
  return (
    <>
      <div className="list">
        <span className="clearIcon">
          <Button
            className="clearIcon"
            onClick={() => {
              props.onselect(props.id);
            }}
          >
            <DeleteIcon />
          </Button>
          <Button onClick={clicked}>
            <ClearIcon />
          </Button>
        </span>
        <li
          className="li"
          style={{ textDecoration: line ? "line-through" : "none" }}
        >
          {props.itemi}
        </li>
      </div>
    </>
  );
};
