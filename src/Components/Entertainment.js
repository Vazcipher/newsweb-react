import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { api_key } from '../constants/constants';
import { Col, Row } from 'react-bootstrap';
import News from './News';


export default function Entertainment() {
    const [entertainment, setentertainment] = useState([])
    const country = useSelector(state => state.country)

    useEffect(() => {
        
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&apiKey=${api_key}`).then(res=>{
            if(res){
                setentertainment(res.data.articles)
            }
        })
       
    }, )
   
    return (
        <Row className="mt-2 p-3">
            {
                entertainment? entertainment.map((item,key)=>(
                    <Col xs={12} ms={8} lg={6} xl={3}>
                        <News data={item}/>
                    </Col>
                )):"error"
            }
        </Row>
    )
}
