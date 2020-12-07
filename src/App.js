import React, { useState } from "react";
import "./styles.css";

function App() {
  const [fname, setfname] = useState("");
  const [name1, setname1] = useState("");
  const [lname, setlname] = useState("");
  const [name2, setname2] = useState("");
  const Updatefname = (event) => {
    setfname(event.target.value);
  };
  const Updatelname = (event) => {
    setlname(event.target.value);
  };

  const onSubmit = () => {
    setname1(fname);
    setname2(lname);
  };

  return (
    <div>
      <div class="bold-line"></div>
      <div class="container">
        <div class="window">
          <div class="overlay"></div>
          <div class="content">
            <div class="welcome">
              Hello {name1} {name2}
            </div>

            <div class="input-fields">
              <input
                type="text"
                placeholder="First Name"
                onChange={Updatefname}
                value={fname}
                class="input-line full-width"
              ></input>
              <input
                type="email"
                placeholder="Last Name"
                value={lname}
                onChange={Updatelname}
                class="input-line full-width"
              ></input>
              {/* <input
                type="password"
                placeholder="Password"
                class="input-line full-width"
              ></input> */}
            </div>

            <div class="spacing">
              <button onClick={onSubmit} class="ghost-round full-width">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
