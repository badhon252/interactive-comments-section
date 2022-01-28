import React from "react";
import avartar from "../images/avatars/image-amyrobson.png";
const Comments = () => {
  return (
    <div>
      <div className="profile-info">
        <img src={avartar} alt="" />
        <span>amyrobson</span>
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
