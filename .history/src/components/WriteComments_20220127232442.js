import React, { useState } from "react";
import "../App.css";
import Avatar from "../images/avatars/image-juliusomo.png";
import Comments from "./Comments";
export default function WriteComments() {
  const [input, setInput] = useState("");

  return (
    <div className="main-div">
      <div className="comment-input ">
        <form action="" className="comment-section shadow">
          <img src={Avatar} alt="images" className="my-img" />
          <textarea
            name=""
            id=""
            rows="4"
            cols="50"
            defaultValue="  Add a comment..."
          />
          <button className="submit-btn">SEND</button>
        </form>{" "}
      </div>
      <Comments />
    </div>
  );
}
