import moment from 'moment'
import { Select, Typography, Row, Col , Card } from 'antd'
import { useGetNewsQuery } from '../services/newsApi';



var {Title, Text} = Typography;  // eslint-disable-next-line
var {Option} = Select;

function News({simplified}) {

    // var demoImg = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'
    var demoImg2 = 'https://www.coindesk.com/pf/resources/images/logos/Coindesk_logo_396x75.svg?d=328'
    

    var {data: news} = useGetNewsQuery({ count: simplified ? 6 : 12})

    console.log('Hhh')
    console.log(news?.[0])

    if(!news){ 
        return (
            <div className="haha">
                <div className='custom-loader' />
            </div>
            
            )
        ;}


    var content = news?.map((news, i) => {
        return (
            <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className='news-card'>
                    <a href={news.url} target='_blank' rel="noreferrer">
                        <div className="news-image-container">
                            <Title className='news-title' level={4}>{news.title}</Title>
                            {/* <img src={news?.image?.thumbnail?.contentUrl || demoImg} alt="news" /> */}
                        </div>
                        <p>{news.description > 100 ? news.description.substring(0, 100) : news.description}</p>
                        <div className="provider-container">
                            <div>
                                <img src={demoImg2} style={{width: 100, height: 20}} alt='' />
                                {/* <Text className='provider-name'>Coin Desk</Text> */}
                            </div>
                            <Text>{moment(news.date).startOf("ss").fromNow()}</Text>
                        </div> 
                    </a>
                </Card>
            </Col>
        )
    })

    //   Url /  title / Image* / description / Provider Name, Image* / Date

    
    return (
        <Row gutter={[24, 24]}>
            {content}
        </Row>
    )
}

export default News