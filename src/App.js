import './App.css';
import {Routes, Route , Link} from 'react-router-dom'
import {Layout, Typography, Space} from 'antd'
import { Navbar, News, CryptoCurrencies, CryptoDetails, Homepage, Exchanges } from './Components';

function App() {

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
            <div className="routes">
                <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/exchanges' element={<Exchanges />} />
                <Route exact path='/cryptocurrencies' element={<CryptoCurrencies />} />
                <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
                <Route exact path='/news' element={<News />} />
                </Routes>
            </div>
        </Layout>
        <div className="footer">  
            <Typography.Title level={5} style={{color: "white" , textAlign: 'center'}}>
                ChikhLoupi <br />
                All Rights Reserved, <span style={{"color": "#1677ff"}}><a rel='noreferrer' href='https://facebook.com/YasSer.0726' target='_blank'>YasSer</a></span> 2023&copy;
            </Typography.Title>
            <Space>
                <Link to='/'>Home</Link>
                <Link to='/exchanges'>Exchanges</Link>
                <Link to='/news'>News</Link>
            </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
