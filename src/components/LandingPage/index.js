import React, { useState } from 'react'

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

    {/*useEffect(() => {
        api.get('weather', {
            params: {
                q: `${country}`,
                appid: `${API_KEY}`
            }
        }
        ).then(response => {
           console.log(response.data);
       })
   }, [])*/}

   async function handleConsultWeather(e) {
        e.preventDefault();

        const country_name = country
        const country_id = id

        try {
            await api.get('weather', {
                params: {
                    q: `${country_name}, ${country_id}`,
                    appid: `${API_KEY}`,
                }
            }).then(response => {
                console.log(response.data)
                setWeather(response.data)
            })
        }
        catch (err) {
            alert('Search Error! Check the city name')
        }
    }

return (
    <>
        <container className="weather-container">
            <section className="form-section">
                <form className="inputs" onSubmit={handleConsultWeather}>
                    <Form.Row>
                        <Form.Label column="lg" lg={0}>
                            City:
                        </Form.Label>
                        <Col className="input-col-1" >
                            <Form.Control value={country} onChange={e => setCountry(e.target.value)} id="city-name" size="lg" type="text" placeholder="City Name" />
                        </Col>
                    </Form.Row>
                    <Form.Row className="form-row">
                        <Form.Label column="lg" lg={0}>
                            Country ID:
                        </Form.Label>
                        <Col className="input-col-2" >
                            <Form.Control value={id} onChange={e => setID(e.target.value)} id="country-id" size="lg" type="text" placeholder="ID" />
                        </Col>
                    </Form.Row>
                    <Button type="submit" variant="dark">Consult</Button>
                </form>
                
                <div className="weather-data">
                    
                </div>

            </section>
        </container>
    </>
    )
}
