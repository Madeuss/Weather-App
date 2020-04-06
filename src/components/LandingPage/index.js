import React, { useState, useEffect } from 'react'

/* BOOTSTRAP COMPONENTS */
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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
                <aside className="left"></aside>
                <aside className="right">
                    <form className="inputs" onSubmit={handleConsultWeather}>
                        <Form.Row className="form-row">
                            <Form.Label column="lg" lg={0}>
                                City:
                            </Form.Label>
                            <Col id="input-col-1" className="input-col" >
                                <input value={country} onChange={e => setCountry(e.target.value)} id="city-name" size="lg" type="text" placeholder="City Name" />
                            </Col>
                        </Form.Row>
                        <Form.Row className="form-row">
                            <Form.Label column="lg" lg={0}>
                                Country ID:
                            </Form.Label>
                            <Col id="input-col-2" className="input-col" >
                                <input value={id} onChange={e => setID(e.target.value)} id="country-id" size="lg" type="text" placeholder="ID" />
                            </Col>
                        </Form.Row>
                        <Button type="submit" variant="dark">Consult</Button>
                    </form>

                    <div className="weather-data">

                        {/* City - Country */}
                        <div className="data-group city_country">
                            <h2> {weather.name}</h2>
                            { weather.sys? (
                                <>
                                    <h2> -{weather.sys.country}</h2>
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
