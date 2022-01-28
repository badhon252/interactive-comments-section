import React from "react";
import "../App.css";
import Comment from "./Comment";
import Avatar from "../images/avatars/image-juliusomo.png";

export default function WriteComments() {
  return (
    <div>
      <div className="comment ">
        <form action="" className="comment-section shadow">
          <img src={Avatar} alt="images" />
          <textarea name="" id="" rows="4" cols="50">
            Add a comment...
          </textarea>
          <button className="submit-btn">SEND</button>
        </form>{" "}
      </div>
      <Comment />
    </div>
  );
}
