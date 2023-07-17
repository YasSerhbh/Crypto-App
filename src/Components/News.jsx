import moment from 'moment'
import { Select, Typography, Row, Col , Avatar, Card } from 'antd'
import { useGetNewsQuery } from '../services/newsApi';



var {Title, Text} = Typography;  // eslint-disable-next-line
var {Option} = Select;

function News({simplified}) {

    var demoImg = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'


    var {data: news} = useGetNewsQuery({newsCategory: 'cryptocurrency', count: simplified ? 6 : 12})

    if(!news?.value){ 
        return (
            <div className="haha">
                <div className='custom-loader' />
            </div>
            
            )
        ;}

    var content = news.value.map((news, i) => {
        return (
            <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className='news-card'>
                    <a href={news.url} target='_blank' rel="noreferrer">
                        <div className="news-image-container">
                            <Title className='news-title' level={4}>{news.name}</Title>
                            <img src={news?.image?.thumbnail?.contentUrl || demoImg} alt="news" />
                        </div>
                        <p>{news.description > 100 ? news.description.substring(0, 100) : news.description}</p>
                        <div className="provider-container">
                            <div>
                                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImg} alt='' />
                                <Text className='provider-name'>{news.provider[0]?.name}</Text>
                            </div>
                            <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
                        </div> 
                    </a>
                </Card>
            </Col>
        )
    })



    
    return (
        <Row gutter={[24, 24]}>
            {content}
        </Row>
    )
}

export default News