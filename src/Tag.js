import React from "react";
import { Button } from "antd";

export default function Tag(props) {
  return (
    <Button className="tag-button" onClick={() => props.onClick()}>
      {props.data.tag}
    </Button>
  );
}
