import React from "react";
import avartar from "../images/avatars/image-amyrobson.png";
// import { FaTrash } from "react-icons/fa";

const Comments = () => {
  return (
    <div className="comments shadow">
      <div className="profile-info">
        <img src={avartar} alt="" className="random-img" />
        <h4 className="name">@amyrobson</h4>
        <span className="time"> 1 Months ago</span>
        <div className="btn">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>

      <p className="single-comment">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa eaque
        optio cupiditate id debitis ullam, reprehenderit vero rerum illum,
        dolorem totam atque officiis in ratione fugit officia perspiciatis nam?
      </p>
    </div>
  );
};

export default Comments;
