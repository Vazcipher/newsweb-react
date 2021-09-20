import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { api_key } from '../constants/constants'
import News from './News'
import { useSelector } from 'react-redux'

export default function Science() {
    const [science, setScience] = useState([])
    const country = useSelector(state => state.country)
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=science&apiKey=${api_key}`)
            .then(result => {
                if (result) {
                    setScience(result.data.articles)
                }
                else {
                    console.log("error.message");
                }
            })
    }, )
    return (
        <Row className="mt-3 p-3">
            {
                science ? science.map((item,key) => (
                    <Col xs={12} ms={8} lg={6} xl={3}>
                        <News data={item} />
                    </Col>
                )) : "error"
            }
        </Row>
    )
}
