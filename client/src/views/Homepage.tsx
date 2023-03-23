import React from "react";

function Homepage() {
  return (
    <>
      <div className="box">
        <h1>Welcome to the Breaking Bad API Documentation</h1>
      </div>
      <div className="box">
        <h3>characters</h3>
        <p>Characters objects can have the following properties:</p>
        <p>(Arrays may contain only one element)</p>
        <ul>
          <li>
            <p>char_id: the general id of the character (Number)</p>
          </li>
          <li>
            <p>name: the general id of the character (String)</p>
          </li>
          <li>
            <p>birthday: the general id of the character (String)</p>
          </li>
          <li>
            <p>occupation: the general id of the character (Array)</p>
          </li>
          <li>
            <p>img: the general id of the character (String)</p>
          </li>
          <li>
            <p>status: the general id of the character (String)</p>
          </li>
          <li>
            <p>nickname: the general id of the character (String)</p>
          </li>
          <li>
            <p>appearance: the general id of the character (Array)</p>
          </li>
          <li>
            <p>portrayed: the general id of the character (String)</p>
          </li>
          <li>
            <p>category: the general id of the character (String)</p>
          </li>
          <li>
            {" "}
            <p>
              better_call_saul_appearance: the general id of the character
              (Array)
            </p>
          </li>
        </ul>
      </div>
      {/* <div className="box">
        <h3>endpoints</h3>
      </div> */}
    </>
  );
}

export default Homepage;
