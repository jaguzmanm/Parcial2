import React, { useState, useEffect } from "react";

import { FormattedMessage } from "react-intl";
import Device from "./device";

const RoomDetail = (props) => {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="id" />
            </th>
            <th scope="col">
              <FormattedMessage id="device" />
            </th>
            <th scope="col">
              <FormattedMessage id="value" />
            </th>
          </tr>
        </thead>
        <tbody>
          {props.devices.map((e, i) => (
            <Device key={i} device={e} index={i + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomDetail;
