import React from 'react';
import './footer.css'

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center text-white style bg-light' >
            <MDBContainer className='p-4'></MDBContainer>

            <div className='text-center p-3 color-black' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright : Houwayda Farhani
            </div>
        </MDBFooter>
    );
}