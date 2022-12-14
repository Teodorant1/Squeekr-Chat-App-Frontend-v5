import react, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios, { Axios } from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./targetslice";
import "./App.css";

export function Messagecatapult({ user4, password4 }) {
  const [user, setuser] = react.useState(user4);
  const [password, setpassword] = react.useState(password4);
  const [endpoint, setendpoint] = useState("http://localhost:8002/sendsms");

  const target = useSelector((state) => state.target.value);

  const sendmessage = async () => {
    const messagetosend = document.getElementById("messagetext").value;

    const parcela2 =
      "{ from:" +
      user +
      ", to:" +
      target +
      ",user:" +
      user +
      ",password:" +
      password +
      ", text:zsocnalimunada" +
      messagetosend +
      "}";

    axios.post(endpoint, parcela2).catch((error) => console.log(error));
  };

  return (
    <div
      style={{
        backgroundColor: "#00b1f0",
        color: "white",
        height: "60px",
        width: window.innerWidth * 0.99999,
      }}
      id="mcatapult"
    >
      {" "}
      <div class="p-3 mb-2 bg-info text-white form-group">
        <input
          type="text"
          className="form-control"
          id="messagetext"
          placeholder="Your Message Goes Here"
        />
        <button
          style={{
            backgroundColor: "#9dd045",
            color: "white",
            height: "50px",
            width: "100%",
          }}
          onClick={() => {
            sendmessage();
          }}
        >
          {" "}
          Send Message{" "}
        </button>
      </div>{" "}
    </div>
  );
}
