import logo from './logo.svg';
import './App.css';
import { Input, Card, Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout id="layout">
        <Header className="App-header">
          <div style={{padding: '0 16px'}}>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <img src="//static.wbstatic.net/i/header/logo-v1.svg" alt="Wildberries"/>
            <Input allwClear defaultValue="Search" id="inputSearch"/>
            {/* <p>
              Edit <code>src/App.js</code> and save to reload.
            </p> */}
          </div>
        </Header>
        <Content>
          <div style={{padding: '0 50px'}}>
            <Card bordered={false}>
              <p>Card content</p>
            </Card>
          </div>
        </Content>
      </Layout>
      
      {/* <header className="App-header">
        <div style={{padding: '0 16px'}}> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <img src="//static.wbstatic.net/i/header/logo-v1.svg" alt="Wildberries"/>
          <Input allwClear defaultValue="Search" id="inputSearch"/>
        </div>
      </header> */}
      {/* <div style={{padding: '0 16px'}}>
        <Card bordered={false}>
          <p>Card content</p>
        </Card>
      </div> */}

    </div>
  );
}

export default App;
