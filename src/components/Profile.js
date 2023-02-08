import React from 'react';
import Container from 'react-bootstrap/Container';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function Profile() {
    return (
        <div className="vh-100" style={{ backgroundColor: '#eee' }}>
            <Container className='pt-4'>
                <MDBContainer>
                    <MDBRow className="justify-content-center">
                        <MDBCol md="9" lg="7" xl="5" className="mt-5">
                            <MDBCard style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }}>
                                <MDBCardBody className="p-4 text-black">
                                    <div>
                                        <MDBTypography tag='h6'>Exquisite hand henna tattoo</MDBTypography>
                                    </div>
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="flex-shrink-0">
                                            <MDBCardImage
                                                style={{ width: '70px' }}
                                                className="img-fluid rounded-circle border border-dark border-3"
                                                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp'
                                                alt='Generic placeholder image'
                                                fluid />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="d-flex flex-row align-items-center mb-2">
                                                <p className="mb-0 me-2">@sheisme</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <MDBCardText>5 Rdvs</MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Container>
        </div>
    );
}