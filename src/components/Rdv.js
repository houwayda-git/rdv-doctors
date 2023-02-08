import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


export default function Rdv() {
    const [appointment, setAppointment] = useState({})
    const [appointmentType, setAppointmentType] = useState('doctor')

    const [selectDoctors, setSelectDoctors] = useState([]);
    const labs = [{ id: "0", name: "Medis", address: { city: "Nabeul" } },
    { id: "1", name: "SEIF", address: { city: "Slimane" } }]


    useEffect(() => async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const { users } = await response.json();
            console.log(users)
            setSelectDoctors(users)
        } catch (err) {
            console.error(err.message);
        }
    }, [])

    function range(from, to) {
        return ([...Array(to - from + 1).keys()].map(num => num + from))
    }

    function handleSelectType(type) {
        setAppointmentType(type)
        setAppointment({ ...appointment, type })
    }

    function handleSelect(event) {
        const selectedItemId = event.target.value
        setAppointment({ ...appointment, selectedItemId })
    }

    function handleSubmit() {
        // construct data
        console.log(appointment)
        // send data to global state
    }



    return (
        <div className="vh-100" style={{ backgroundColor: '#eee' }}>
            <Container className='pt-4'>
                <Form>
                    <div key={`inline-radio`} className="mb-3">
                        <Form.Check
                            inline
                            onChange={() => handleSelectType('doctor')}
                            checked={appointmentType == 'doctor'}
                            label="select by doctor"
                            name="group1"
                            type="radio"
                            id="inline-radio-1"
                        />
                        <Form.Check
                            inline
                            onChange={() => handleSelectType('lab')}
                            checked={appointmentType == 'lab'}
                            label="select by lab"
                            name="group1"
                            type="radio"
                            id="inline-radio-2"
                        />
                    </div>
                </Form>

                SELECTING BY {appointmentType}
                <Form.Select onChange={handleSelect} aria-label="Default select example">
                    <option>Open this select menu</option>
                    {appointmentType === "doctor"
                        ? (selectDoctors.map((doctor) => (
                            <option value={doctor.id}>{doctor.firstName} {doctor.lastName} - in {doctor.address.city}</option>
                        )
                        )) : (labs.map((lab) => (
                            <option value={lab.id}>{lab.name} - in {lab.address.city}</option>
                        )
                        ))}
                    { }
                </Form.Select>

                <div>{range(9, 16).map((time) => (
                    <button
                        style={appointment.time === time ? { backgroundColor: "blue", color: "white" } : {}}
                        key={time}
                        onClick={() => setAppointment({ ...appointment, time: time })}
                    >
                        {time} - {time + 1}
                    </button>
                ))}</div>


                <Button onClick={handleSubmit}>Schedule</Button>
            </Container>
        </div>
    );
}
