import React from "react";
import "../App.css";

import Avatar from "../images/avatars/image-juliusomo.png";
import Comment from "./Comment";

export default function WriteComments() {
  return (
    <div>
      <div className="comment ">
        <form action="" className="comment-section shadow">
          <img src={Avatar} alt="images" />
          <textarea
            name=""
            id=""
            rows="4"
            cols="50"
            value=" Add a comment..."
          />
          <button className="submit-btn">SEND</button>
        </form>{" "}
      </div>

      <Comment />
    </div>
  );
}
