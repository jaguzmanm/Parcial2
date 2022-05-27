import React, { useState, useEffect } from "react";

import { Col, Row } from "react-bootstrap";

import { FormattedMessage } from "react-intl";
import RoomDetail from "./roomDetail";
import Room from "./room";

const RoomList = (props) => {
  const [room, setSelectedRoom] = useState(-1);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setRooms(res);
      });
  }, []);

  let select = (index) => {
    setSelectedRoom(index);
  };

  let renderRooms = () => {
    return rooms.map((item, i) =>
      item.homeId === props.spaceId ? (
        <Col sm="3" key={i + 1} onClick={() => select(i)}>
          <Room key={i + 1} data={item} />
        </Col>
      ) : null
    );
  };

  return (
    <div>
      <Row>
        <h2>
          <FormattedMessage id="room" />
        </h2>
      </Row>
      <Row>
        <Col md="7">
          <Row id="spacesList">{renderRooms()}</Row>
        </Col>
        <Col md="5">
          {room === -1 ? null : <RoomDetail devices={rooms[room].devices} />}
        </Col>
      </Row>
    </div>
  );
};

export default RoomList;
