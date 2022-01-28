import React from "react";
import avartar from "../images/avatars/image-amyrobson.png";
const Comments = () => {
  return (
    <div className="comments shadow">
      <div className="profile-info">
        <img src={avartar} alt="" className="random-img" />
        <h4 className="name">@amyrobson</h4>

        <h6 className="time"> 1 Months ago</h6>
      </div>

      <p className="single-comment">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa eaque
        optio cupiditate id debitie fugit officia perspiciatis nam?
      </p>
    </div>
  );
};

export default Comments;
