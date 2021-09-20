import React from 'react'
import {Card} from 'react-bootstrap'

export default function News({ data }) {
    // console.log(data);
    return (
        <Card className="my-3">
            <Card.Img variant="top" src={data.urlToImage} alt="No image" />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Link href={data.url} className="mt-2">Read more</Card.Link>
            </Card.Body>
        </Card>
    )
}
