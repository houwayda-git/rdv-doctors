import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';


export default function Connect() {
    return (
        <div className="vh-100" style={{ backgroundColor: '#eee' }}>
            <Container className='pt-4'>
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />
                    <Button variant="success">Success</Button>
                </MDBContainer>
            </Container>
        </div>
    )
}
