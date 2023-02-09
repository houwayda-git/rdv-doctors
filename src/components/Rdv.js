import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux'
import { add } from '../Redux/rdvSlice'
import { useNavigate } from 'react-router-dom';



export default function Rdv() {
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState({})
    const dispatch = useDispatch()
    const [appointmentType, setAppointmentType] = useState('')

    const [selectDoctors, setSelectDoctors] = useState([]);
    const labs = [{ id: "0", name: "Medis", address: { city: "Nabeul" } },
    { id: "1", name: "SEIF", address: { city: "Slimane" } }]


    useEffect(() => async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const { users } = await response.json();
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
        dispatch(add(appointment))
        setAppointment('')
        setAppointmentType('')
        // send data to global state
    }



    return (
        <div className="vh-100" style={{ backgroundColor: '#eee' }}>
            <Container className='pt-4 align-items-center'>
                <Form>
                    <div key={`inline-radio`} className="">
                        <Form.Check
                            inline
                            onChange={() => handleSelectType('doctor')}
                            label="select by doctor"
                            name="group1"
                            type="radio"
                            id="inline-radio-1"
                            required
                        />
                        <Form.Check
                            inline
                            onChange={() => handleSelectType('lab')}
                            label="select by lab"
                            name="group1"
                            type="radio"
                            id="inline-radio-2"
                            required
                        />
                    </div>
                </Form>
                {appointmentType !== '' ?
                    <>
                        <Form.Select onChange={handleSelect} aria-label="Default select example" >
                            <option>Open this select menu</option>
                            {appointmentType === "doctor"
                                ? (selectDoctors.map((doctor) => (
                                    <option value={doctor.firstName}>{doctor.firstName} {doctor.lastName} - in {doctor.address.city}</option>
                                )
                                )) : appointmentType === "lab" ? (labs.map((lab) => (
                                    <option value={lab.name}>{lab.name} - in {lab.address.city}</option>
                                )
                                )) : <option>Open this select menu</option>}
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


                        <Button onClick={handleSubmit}>Schedule</Button></> : null}
            </Container>
        </div>
    );
}
