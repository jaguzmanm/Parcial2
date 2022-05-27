import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Space = (props) => {
  return (
    <div className="card">
      <img
        src="https://images.vexels.com/media/users/3/137241/isolated/lists/3d10d28f54e794eb3cd8f3512199d0a3-edificio-casa-de-la-ciudad-casa.png"
        className="card-img-top"
        alt="Space Image"
      />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <p className="card-text">{props.data.address}</p>
      </div>
    </div>
  );
};

export default Space;
