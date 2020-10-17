import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

const Barra = () => {
    return(
        <Navbar color={"danger"} dark expand="lg" className="sticky-top">
            <NavbarBrand href={"/"}>Pokemon Website</NavbarBrand>
        </Navbar>
    )
}

export default Barra;