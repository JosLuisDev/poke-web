import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

const Barra = () => {
    return(
        <Navbar color={"danger"} dark className="sticky-top navbar-expand-xl">
            <NavbarBrand href={"/"}>Pokemon Website</NavbarBrand>
        </Navbar>
    )
}

export default Barra;