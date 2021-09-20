import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { api_key } from '../constants/constants'
import {Row,Col} from 'react-bootstrap'
import News from './News'


export default function Technology() {
    const [technologies, setTechnologies] = useState([])
    const country = useSelector(state => state.country)

   
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=technology&apiKey=${api_key}`).then(res=>{
            if(res){
                setTechnologies(res.data.articles)
            }
            else{
                console.log("error");
            }
        })
    }, )

 
    return (
        <Row className="mt-3 p-3">
        {
            technologies ? technologies.map((item,key) => (
                <Col xs={12} ms={8} lg={6} xl={3}>
                    <News key={key} data={item} />
                </Col>
            )) : "error"
        }
    </Row>
    )
}
