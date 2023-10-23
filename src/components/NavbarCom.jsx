import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavbarCom = observer(() => {
    const {user} = useContext(Context)
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to={SHOP_ROUTE} >GETDEVICE</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto">
                            <Button onClick={() => user.setIsAuth(false)}>Exit</Button>
                            <Button className="ml-2">Admin</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto">
                            <Button onClick={() => user.setIsAuth(true)}>Autoriz</Button>
                        </Nav>

                    }


                </Container>
            </Navbar>
        </>
    );
})

export default NavbarCom;