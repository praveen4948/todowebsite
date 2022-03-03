import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { List } from "./comp/List";
// import AddIcon from "@mui/icons-material/Add";
// import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
// import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [val, setVal] = useState([]);
  const [input, setinput] = useState("");

  const inputf = (event) => {
    setinput(event.target.value);
  };

  const add = () => {
    if (input === "") alert("add is empty");
    else {
      setVal((oldval) => {
        return [...oldval, input];
      });
    }
    setinput("");
  };

  const deleteitem = (id) => {
    setVal((oldval) => {
      return oldval.filter((arrelement, index) => {
        return index != id;
      });
    });
  };

  return (
    <div className="main">
      <div className="content">
        <h1 className="head">To do list </h1>
        <div className="input">
          <input
            type="text"
            placeholder="Add a Item"
            onChange={inputf}
            name="item"
            value={input}
          />
          <Button className="pbut" onClick={add}>
            <AddIcon />
          </Button>
        </div>
        <ol>
          {val.map((item, index) => {
            return (
              <List itemi={item} key={index} id={index} onselect={deleteitem} />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
