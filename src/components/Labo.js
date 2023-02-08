import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';



export default function Labo() {
    return (
        <div className="vh-100" style={{ backgroundColor: '#eee' }}>
            <Container className='pt-4'>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </Container>
        </div>
    )
}
