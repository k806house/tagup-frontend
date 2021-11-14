import "./App.css";
import React, { useState } from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import { SearchOutlined } from "@ant-design/icons";
import Tag from "./Tag";
import TagHelp from "./TagHelp";


const testLabels = [
  { tag: "k806", isRouting: false, ref: "" },
  { tag: "Хакатон", isRouting: false, ref: "" },
  { tag: "Ночь без сна", isRouting: false, ref: "" },
  { tag: "2021", isRouting: false, ref: "" },
  { tag: "Кофе", isRouting: false, ref: "" },
];

// const testLabels = [
//   { tag: "пантолеты", isRouting: false, ref: "" },
//   { tag: "чуни", isRouting: false, ref: "" },
//   { tag: "шлепки", isRouting: false, ref: "" },
//   { tag: "массажные", isRouting: false, ref: "" },
//   { tag: "женские", isRouting: false, ref: "" },
//   { tag: "luomma", isRouting: false, ref: "" },
//   { tag: "forio", isRouting: false, ref: "" },
//   { tag: "обувь", isRouting: false, ref: "" }
// ];

function App() {
  const [drawLabels, drawLabelsSet] = useState(false);
  const [searchText, searchTextSet] = useState("");

  const [data, setData] = useState({
    value: [],
    loading: true
  });

  var drawLabel = function () {
    setData({value: testLabels, loading: false})
    drawLabelsSet(true);
  };

  return (
    <div className="App">
      <div class="main-container">
        <img
          src="//static.wbstatic.net/i/header/logo-v1.svg"
          alt="Wildberries"
        />
        <div className="input-container">
          <Input
            allwClear
            onPressEnter={() => drawLabel()}
            value={searchText}
            onChange={(e) => searchTextSet(e.target.value)}
            placeholder="Я ищу..."
            autocomplete="off"
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
            data.value.map((d, index) => (
              d.isRouting ? <TagHelp
                key={index}
                data={d}
                onClick={() => {
                  data.value.splice(index, 1);
                  setData({value: data.value});
                }}
              /> :
              <Tag
                key={index}
                data={d}
                onClick={() => {
                  searchTextSet(searchText + " " + d.tag);
                  drawLabelsSet(false);
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
