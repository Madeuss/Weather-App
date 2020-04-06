import React, { useState } from 'react'

/* BOOTSTRAP COMPONENTS */
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

import bg1 from '../../assets/bg1.jpeg'
import bg2 from '../../assets/bg2.jpeg'
import bg3 from '../../assets/bg3.jpeg'
import bg4 from '../../assets/bg4.jpeg'
import bg5 from '../../assets/bg5.jpeg'
import bg6 from '../../assets/bg6.jpeg'
import bg7 from '../../assets/bg7.jpeg'
import bg8 from '../../assets/bg8.jpeg'
import bg9 from '../../assets/bg9.jpeg'
import bg10 from '../../assets/bg10.jpeg'
import bg11 from '../../assets/bg11.jpeg'
import bg12 from '../../assets/bg12.jpeg'
import bg13 from '../../assets/bg13.jpeg'
import bg14 from '../../assets/bg14.jpeg'

import './styles.css'

import api from '../../services/api'

export default function LandingPage() {
    const API_KEY = 'ba6d400600da3da64a7f04693de0c28f'
    const [country, setCountry] = useState('')
    const [id, setID] = useState('')
    const [weather, setWeather] = useState([])

   async function handleConsultWeather(e) {
        e.preventDefault();

        const country_name = country
        const country_id = id

        try {
            await api.get('weather', {
                params: {
                    q: `${country_name}, ${country_id}`,
                    appid: `${API_KEY}`,
                    units: 'metric'
                }
            }).then(response => {
                console.log(response.data)
                setWeather(response.data)
            })
        }
        catch (err) {
            alert('Search Error! Check the city name or the country ID')
        }
    }

return (
    <>
        <container className="weather-container">
            <section className="form-section">
                <aside className="left">
                    <Carousel className="Carousel" interval={8000} controls={false} indicators={false}>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg1} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg3} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg5} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg7} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg9} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg11} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg13} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg2} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg4} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg6} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg8} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg10} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg12} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item className="carousel-item-1">
                            <img className="d-block w-100" src={bg14} alt="First slide"/>
                        </Carousel.Item>
                    </Carousel>
                </aside>
                <aside className="right">
                    <form className="inputs" onSubmit={handleConsultWeather}>
                        <Form.Row className="form-row">
                            <Form.Label column="lg" lg={0} className="form-label">
                                City:
                            </Form.Label>
                            <Col id="input-col-1" className="input-col" >
                                <input value={country} onChange={e => setCountry(e.target.value)} id="city-name" size="lg" type="text" placeholder="City Name" />
                            </Col>
                        </Form.Row>
                        <Form.Row className="form-row">
                            <Form.Label column="lg" lg={0} className="form-label">
                                Country ID:
                            </Form.Label>
                            <Col id="input-col-2" className="input-col" >
                                <input value={id} onChange={e => setID(e.target.value)} id="country-id" size="lg" type="text" placeholder="ID" />
                            </Col>
                        </Form.Row>
                        <button className="btn-consult" type="submit">Consult</button>
                    </form>

                    <div className="weather-data">
                        {/* Weather Icon */}
                        { weather.weather ? (
                            weather.weather.map(w => 
                            <>
                                 <img src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} alt="weather-icon" />
                            </>
                            )) : (
                            <div></div> 
                        )}

                        {/* City - Country */}
                        <div className="data-group city_country">
                            <h2> {weather.name}</h2>
                            { weather.sys? (
                                <>
                                    <h2>, {weather.sys.country}</h2>
                                </>
                                ) : (
                                <div></div> 
                            )} 
                        </div>

                        {/* Main info and Weather Description */}
                        { weather.weather ? (
                            weather.weather.map(w => 
                            <>
                                <h1>{w.main}</h1>
                                <p>{w.description}</p>
                            </>
                            )) : (
                            <div></div> 
                        )}
                        <br></br>

                        {/* Temp and Humidity */}
                        { weather.main ? (
                            <>
                                <h2>{weather.main.temp} ºC</h2>
                                <div className="data-group">
                                    <span>Humidity: </span>
                                    <p>{weather.main.humidity}%</p>
                                </div>
                            </>
                            ) : (
                            <div></div> 
                        )}  
                    </div>
                </aside>               
            </section>
        </container>
    </>
    )
}
