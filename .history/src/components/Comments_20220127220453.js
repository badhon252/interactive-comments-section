import React from "react";
import avartar from "../images/avatars/image-amyrobson.png";
const Comments = () => {
  return (
    <div className="comment">
      <div className="profile-info">
        <img src={avartar} alt="" className="random-img" />
        <h4 className="name">@amyrobson</h4>

        <p className="time">10 Months ago</p>
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
