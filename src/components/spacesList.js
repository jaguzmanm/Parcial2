import React, { useState, useEffect } from "react";

import { Col, Row } from "react-bootstrap";

import { FormattedMessage } from "react-intl";
import Space from "./space";
import RoomList from "./roomList";

const SpaceList = (props) => {
  const [space, setSelectedSpace] = useState(-1);
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json"
    )
      .then((res) => res.json())
      .then((res) => {
        setSpaces(res);
      });
  }, []);

  let select = (index) => {
    setSelectedSpace(index);
  };

  let renderSpaces = () => {
    return spaces.map((item, i) => (
      <Col sm="3" key={i + 1} onClick={() => select(i)}>
        <Space key={i + 1} data={item} />
      </Col>
    ));
  };

  return (
    <div>
      <Row id="spacesList">{renderSpaces()}</Row>
      {space === -1 ? null : <RoomList spaceId={spaces[space].id} />}
    </div>
  );
};

export default SpaceList;
