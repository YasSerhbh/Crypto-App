import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi';
import {CryptoCurrencies, News} from '../Components';


var {Title} = Typography;

function Homepage() {

    var {data , isFetching} = useGetCryptosQuery(10)
    var globalStats = data?.data?.stats
    
    if(isFetching) { 
    return (
        <div className="haha">
            <div className='custom-loader' />
        </div>
        
        )
    ;}

    return (
        <>
            <Title level={2} className='heading'>Global Crypto Statistics</Title>
            <Row>
                <Col span={12}><Statistic title='Total CryptoCurrencies' value={globalStats.totalCoins} /></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className='home-title'>Top 10 Crypto Currencies</Title>
                <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
            </div>
            <CryptoCurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className='home-title'>Lastest Crypto News</Title>
                <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
            </div>
            <News simplified />
        </>
    )
}

export default Homepage