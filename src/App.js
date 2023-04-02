import logo from "./logo.svg";
import "./App.css";
import From from "./Components/From";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function App() {
  const [inputList, setinputList] = useState([{ firstName: "", lastName: "" }]);
  const handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);
  };

  const handleremove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };
  const handleaddclick = () => {
    setinputList([...inputList, { firstName: "", lastName: "" }]);
  };

  return (
    <div className="App">
      <h1 className="mb-7">Asif vai kacchi?</h1>
      {inputList.map((x, i) => {
        return (
          <div className="mr-3 mb-2">
            <div className="flex flex-row">
              <div className="flex flex-row">
                <h1 className="mx-4 mt-2">Form</h1>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-accent w-full max-w-xs"
                  onChange={(e) => handleinputchange(e, i)}
                />
              </div>
              <div className="flex flex-row">
                <h1 className="mx-4 mt-2">Amount</h1>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-accent w-full max-w-xs"
                  onChange={(e) => handleinputchange(e, i)}
                />
              </div>
              <div className="mt-3 ml-2">
                <FaPlus onClick={handleaddclick} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
