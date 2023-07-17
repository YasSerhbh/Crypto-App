import millify from "millify"
import { Link } from "react-router-dom"
import { Card, Row, Col, Input } from "antd"
import { useGetCryptosQuery } from "../services/cryptoApi"
import { useEffect, useState } from "react"

function Cryptocurrencies({simplified}) {

    var count = simplified ? 10 : 100;
    var {data: cryptosList, isFetching} = useGetCryptosQuery(count)
    var [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
    var [searchTerm, setSearchTerm] = useState("")

    
    useEffect(() => {
        const filtered = cryptosList?.data?.coins.filter((e) => e.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCryptos(filtered)
     // eslint-disable-next-line
    }, [searchTerm, cryptos])
    
    if(isFetching) { 
        return (
            <div className="haha">
                <div className='custom-loader' />
            </div>
            
            )
        ;}
    // console.log(cryptos);

    var content = cryptos?.map((currency) => {
        return (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.rank}>
                <Link to={`/crypto/${currency.uuid}`}>
                    <Card title={`#${currency.rank} ${currency.name}`} extra={<img className="crypto-image" alt="icon" src={currency.iconUrl} />} hoverable>
                        <p>Price: $ {millify(currency.price)}</p>
                        <p>Market Cap: $ {millify(currency.marketCap)}</p>
                        <p>Daily Change: {millify(currency.change)}%</p>
                    </Card>
                </Link>
            </Col>
        )
    })

    return (
        <>
            {!simplified && <div className="search-crypto">
                <Input placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>}
            <Row gutter={[32,32]} className="crypto-card-container">
                {content}
            </Row>
        </>
    )
}

export default Cryptocurrencies