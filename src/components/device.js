import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Device = (props) => {
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>{props.device.id}</td>
      <td>{props.device.name}</td>
      <td>{props.device.desired.value}</td>
    </tr>
  );
};

export default Device;
