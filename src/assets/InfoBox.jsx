import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import "./InfoBox.css"


export default function InfoBox({ info }) {
    const init_img_url = "https://media.istockphoto.com/id/2163514261/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=ADC9cFwz86iJURgop2ZiYNJJ_0JZLkRr6Hp99P95DGc=";

    const HOT_URL = "https://media.istockphoto.com/id/2163514261/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=ADC9cFwz86iJURgop2ZiYNJJ_0JZLkRr6Hp99P95DGc=";

    const TooHot_URL = "https://media.istockphoto.com/id/988274822/photo/young-mother-and-child-with-heatstroke.webp?a=1&b=1&s=612x612&w=0&k=20&c=lV2-InazovodD1cGXyR3grvNPCO0rHm7z1KQvr6rLcc=";

    const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const RAINY_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

    const TooCold_URL = "https://plus.unsplash.com/premium_photo-1671004292035-1daa72d72fa3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    // let info = {
    //     city: "kolkata",
    //     feelsLike: 23.81,
    //     humidity: 53,
    //     temp: 23.97,
    //     tempMax: 23.97,
    //     tempMin: 23.97,
    //     weather: "haze"
    // }

    return (
        <div className="InfoBox">
            {/* <h1>Weather Info - {info.weather}</h1> */}
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 220 }}
                        image={info.humidity > 80 ? RAINY_URL
                            : (info.temp > 15) ? (info.temp < 25) ? HOT_URL 
                            : TooHot_URL : (info.temp < 0) ? TooCold_URL 
                            : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? (info.temp>25 ? <WbSunnyIcon/> : <Brightness7Icon/> ) : (info.temp>0 ? <AcUnitIcon/> : <SevereColdIcon /> )
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div>Temperature = {info.temp}&deg;C</div>
                            <div>humidity = {info.humidity}</div>
                            <div>Min temp = {info.tempMin}&deg;C</div>
                            <div>Max temp = {info.tempMax}&deg;C</div><br />
                            <div>The weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feelsLike}&deg;C</div>



                        </Typography>
                    </CardContent>
                    {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
                </Card>
            </div>
        </div>
    )
}