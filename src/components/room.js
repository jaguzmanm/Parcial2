import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Room = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
      </div>
      <img
        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/available-room-1-501679.png"
        className="card-img-top"
        alt="Room Image"
      />
    </div>
  );
};

export default Room;
