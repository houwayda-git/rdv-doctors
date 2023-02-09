import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';


export default function Profile() {
    const [listRdv, setListRdv] = useState([])
    useEffect(() => {
        setListRdv(JSON.parse(localStorage.getItem('state')))
    }, [])
    console.log(listRdv)
    return (
        <div className="vh-100" style={{ backgroundColor: '#eee' }}>
            <h3> Vous avez {listRdv.length} RDV : </h3>
            <Container className='pt-4'>
                {listRdv.map((first, i) => <p key={i}>
                    {i + 1} : {first.name.type === 'lab' ? 'Laboratoire' : 'Docteur'}  {first.name.selectedItemId}    à  {first.name.time} h
                </p>)}
            </Container>
        </div >
    );
}