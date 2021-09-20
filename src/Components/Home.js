import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { api_key } from '../constants/constants'
import axios from 'axios'
import { Col, Row, Spinner } from 'react-bootstrap'
import News from './News'


export default function Home() {
    const [topHeadlines, setTopHeadlines] = useState([])
    const country = useSelector(state => state.country)
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}`).then(res => {
            if (res) {
                setTopHeadlines(res.data.articles)
            }
        })
    })
    // console.log(topHeadlines);
    return (

        <Row className="mt-2 p-3">
            {
                topHeadlines ? topHeadlines.map((item, key) => (
                    <Col xs={12} ms={8} lg={6} xl={3}>
                        <News data={item} />
                    </Col>
                )) :
                  ""
            }
        </Row>


    )
}
