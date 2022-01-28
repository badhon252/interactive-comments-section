import React from "react";

export default function Comments() {
  return (
    <div>
      <div className="comment-section">
        <form action="">
          <textarea name="Comments" id="comment" />{" "}
          <button className="submit-btn">SEND</button>
        </form>{" "}
      </div>
    </div>
  );
}
