import React, { useState } from "react";
import "../App.css";
import Avatar from "../images/avatars/image-juliusomo.png";
import avatar from "../images/avatars/image-amyrobson.png";
// import Comments from "./Comments";

export default function WriteComments() {
  const [input, setInput] = useState("");
  const [comment, setComment] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Input your data!!");
    } else {
      setComment((e) => {
        return [...e, input];
      });
    }
  };

  // const key = new Date().getTime().toString();

  const handleDelete = () => {};
  const handleEdit = () => {};

  return (
    <div className="main-div">
      <div className="comment-input ">
        <form
          action=""
          className="comment-section shadow"
          onSubmit={handleSubmit}
        >
          <img src={Avatar} alt="images" className="my-img" />
          <textarea
            name=""
            id=""
            rows="4"
            cols="75"
            placeholder="Add your comment..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="submit-btn">SEND</button>
        </form>{" "}
      </div>

      {/* comments===== start========== */}
      <div className="comments">
        {comment.map((value) => {
          return (
            <div className="shadow">
              <div className="profile-info">
                <img src={avatar} alt="" className="random-img" />
                <h4 className="name">@amyrobson</h4>
                <h6 className="time"> 1 Months ago</h6>
                <div className="btn">
                  <button className="delete" onClick={handleDelete}>
                    Delete
                  </button>
                  <button className="edit" onClick={handleEdit}>
                    Edit
                  </button>
                </div>
              </div>
              <li className="single-comment">{value}</li>
            </div>
          );
        })}
      </div>
      {/* comments ends ========= */}
    </div>
  );
}
