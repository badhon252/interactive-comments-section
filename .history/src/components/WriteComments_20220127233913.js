import React, { useState } from "react";
import "../App.css";
import Avatar from "../images/avatars/image-juliusomo.png";
import Comments from "./Comments";
export default function WriteComments() {
  const [input, setInput] = useState("");

  const [comment, setComment] = useState([]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className="main-div">
      <div className="comment-input ">
        <form
          action=""
          className="comment-section shadow"
          onClick={handleSubmit}
        >
          <img src={Avatar} alt="images" className="my-img" />
          <textarea
            name=""
            id=""
            rows="4"
            cols="50"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="submit-btn">SEND</button>
        </form>{" "}
      </div>
      <Comments input={input} comments={comment} />
    </div>
  );
}
