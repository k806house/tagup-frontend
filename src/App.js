import "./App.css";
import React, { useState } from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import { SearchOutlined } from "@ant-design/icons";
import Tag from "./Tag";
import TagHelp from "./TagHelp";
import $ from "jquery";


function App() {
  const [drawLabels, drawLabelsSet] = useState(false);
  const [searchText, searchTextSet] = useState("");

  const [data, setData] = useState({
    value: [],
    loading: true
  });

  var drawLabel = function () {
    $.getJSON("http://localhost:8080/tags?", {
      query: searchText
    }).then(d => {setData({value:d, loading:false}); console.log(d); drawLabelsSet(true);});
  };

  return (
    <div className="App">
      <div className="main-container">
        <img
          src="//static.wbstatic.net/i/header/logo-v1.svg"
          alt="Wildberries"
        />
        <div className="input-container">
          <Input
            onPressEnter={() => drawLabel()}
            value={searchText}
            onChange={(e) => searchTextSet(e.target.value)}
            placeholder="Я ищу..."
            autoComplete="off"
            id="input-search"
          />
          <SearchOutlined
            id="icon-search"
            style={{ fontSize: "21px", color: "#ffff", opacity: 0.5 }}
            onClick={() => drawLabel()}
          />
        </div>
        <div className="tag-container">
          {drawLabels && !data.loading &&
            data.value.data.map((d, index) => (
              d.isRouting ? <TagHelp
                key={index}
                data={d}
                onClick={() => {
                  data.value.data.splice(index, 1);
                  setData({value: data.value, loading: false});
                }}
              /> :
              <Tag
                key={index}
                data={d}
                onClick={() => {
                  searchTextSet(d.tag);
                  drawLabelsSet(false);
                  setData({value: data.value, loading: true});
                  drawLabel();
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
