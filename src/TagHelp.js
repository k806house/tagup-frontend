import React from "react";
import { Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";

export default function TagHelp(props) {
  return (
    <Button
      id="tag-button-help"
      href={props.data.ref}
      target="_blank"
      onClick={() => props.onClick()}
    >
      {props.data.tag}
      <LinkOutlined />
    </Button>
  );
}
