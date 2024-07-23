import React from "react";
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, list } from "reactstrap";

export default function Product1(props) {
    const {pro} = props
    return (
        <Col lg={3}>
        
            <Card>
                <img
                    alt="Sample"
                    src={pro.img}
                />
                <CardBody>
                    <CardTitle tag="h5">
                    {pro.title}
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    {pro.category}
                    </CardSubtitle>
                    <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                    {pro.price}
                    </Button>
                </CardBody>
            </Card>
        </Col>
    )
}