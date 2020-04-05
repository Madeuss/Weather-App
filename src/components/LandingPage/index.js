import React, { useState, useEffect } from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import './styles.css'

import api from '../../services/api'

export default function LandingPage() {
    const API_KEY = 'ba6d400600da3da64a7f04693de0c28f'

    useEffect(() => {
        api.get('weather', {
            params: {
                q: 'London',
                appid: `${API_KEY}`
            }
        }
        ).then(response => {
           console.log(response.data);
       })
   }, [])

return (
    <>
        <container className="weather-container">
            <section className="form-section">
                <Form.Group>
                    <Form.Row>
                        <Form.Label column="lg" lg={0}>
                            City:
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="City Name" />
                        </Col>
                        <Form.Label column="lg" lg={0}>
                            Country ID
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" placeholder="Country ID" />
                        </Col>
                    </Form.Row>
                </Form.Group>
            </section>
        </container>
    </>
    )
}
