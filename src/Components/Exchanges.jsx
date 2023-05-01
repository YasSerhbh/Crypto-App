import errorImg from '../images/2472_R0lVIE5JQyA1MzItMTI.jpg'


function Exchanges() {
    return (
        <div style={{"display": "flex",
            "flexDirection": "column",
            "alignItems": "center"}}>
            <img src={errorImg} alt='Error' style={{'maxWidth': '300px'}} />
            <p style={{"fontWeight": "bold", "fontSize": "30px", "margin": "50px 0"}}>Sorry, This page isn't available at the moment :'(</p>
        </div>
    )
}

export default Exchanges