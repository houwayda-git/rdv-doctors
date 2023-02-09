import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Doctor() {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();
    useEffect(() => async () => {
        let response;
        try {
            response = await fetch('https://dummyjson.com/users');
            response = await response.json();
            setDoctors(response.users)
        } catch (err) {
            console.error(err.message);
        }
    }, [])

    function handleSelectDoctor() {
        console.log('test')
        // TODO: send doctor id to state
    }
    const rendezVous = {
        doctor: "34253524523627",
        labo: "328426352875295",
        date: "",
    }

    return (

        <Container className='pt-4'>

            {doctors.map((doctor) => (
                <Card style={{ width: '18rem' }} key={doctor.id}>
                    <Card.Body>
                        <img src={doctor.image} alt="avatar" width={60} />
                        <Card.Title>{doctor.firstName} {doctor.lastName}</Card.Title>
                        <Card.Text>
                            <p>{doctor.email} </p>
                            <p>{doctor.phone}</p>
                        </Card.Text>
                        <Button variant="primary" onClick={() => navigate('/rdv')}>Prendre un Rdv</Button>
                    </Card.Body>
                </Card>
            ))}

        </Container >

    );
}
