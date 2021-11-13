import './App.css';
import React, { useState } from "react";
import { Input} from 'antd';
import 'antd/dist/antd.css';
import { SearchOutlined} from '@ant-design/icons';
import Tag from './Tag';
const testLabels = ["Мужчины","Оверсайз","Обтягивающий","Красный", "Шокирующий", "Трушный","Красный", "Шокирующий", "Трушный","Индейка со специями"]


function App() {
  const [drawLabels, drawLabelsSet] = useState(false);
  
  return (
    <div className="App">
          <div class="main-container">
            <img src="//static.wbstatic.net/i/header/logo-v1.svg" alt="Wildberries"/>
            <div className="input-container">
            <Input allwClear placeholder="Search" id="input-search"/>
            <SearchOutlined id="icon-search" style={{ fontSize: '21px', color: '#ffff', opacity: 0.5 }} onClick={() => drawLabelsSet(true)}/>
            </div>
            <div className="tag-container"> 
            { drawLabels && testLabels.map((d, index) => (
              <Tag key={index} data={d}/>
            ))
            }
            </div>
          </div>
    </div>
  );
}

export default App;
