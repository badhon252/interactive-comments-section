import React from "react";
import "../App.css";
import Avatar from "../images/avatars/image-juliusomo.png";
import Comments from "./Comments";
export default function WriteComments() {
  return (
    <div className="main-div">
      <div className="comment ">
        <form action="" className="comment-section shadow">
          <img src={Avatar} alt="images" className="my-img" />
          <textarea name="" id="" rows="4" cols="50">
            Add a comment...
          </textarea>{" "}
          <button className="submit-btn">
            {" "}
            <legend>SEND</legend>
          </button>
        </form>{" "}
      </div>
      <Comments />
    </div>
  );
}
