import React, {useRef,useState} from "react";
import "./hook.css"
import {Card, CardBody, CardTitle, CardSubtitle,CardText, Button, Container, Row, Col, Modal, ModalHeader,ModalBody,ModalFooter} from 'reactstrap'

export default function Hook4(){
const [modal,setModal] = useState(false)
const toggle = () => setModal(!modal)

    const [flag, setFlag] = useState(false)
    const [count, setCount] = useState(10)
    const sidebarRef = useRef()
    console.log(flag)
    const handle_count = () => {
        setCount(count-1)
        setCount(preState=>preState-1)
        setCount(preState=>preState-1)

    }
    return(
        <>
        <Container></Container>
        <Container>
            <Row>
                <Col lg={3} md={4} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} xs={6} className="border p-5">Row</Col>
            </Row>
        </Container>

        <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>

        <Card
        style={{
            width: '18rem'
        }}
        >
        <img
            alt="Sample"
            src="https://picsum.photos/300/200"
        />
        <CardBody>
            <CardTitle tag="h5">
            Card title
            </CardTitle>
            <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
            >
            Card subtitle
            </CardSubtitle>
            <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
            <Button>
            Button
            </Button>
        </CardBody>
        </Card>

        <h1>Count: {count}</h1>
        <button onClick={handle_count}>Count down</button>
        <div className={flag?"hook4 active":"hook4 "}>
            <h1>Hook 4</h1>
            <p>Flag:{flag?"true":"false"}</p>
        </div>
        <div className="meo" ref={sidebarRef}></div>
            <button onClick={()=>{
                setFlag(!flag)
                sidebarRef.current.classList.toggle("active")
                }}>Change flag
            </button>
        </>


        
    )
}