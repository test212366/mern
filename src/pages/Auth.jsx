import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    console.log(location)
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
        className='d-flex justify-content-center align-items-center'
        >
            <Card>
                <h2 className='m-auto'> {isLogin ?
                    <p>login</p>
                    :
                    <p>regis</p>
                }</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control className='mt-2'
                    placeholder='email'
                    />
                    <Form.Control className='mt-2'
                                  placeholder='pass'
                    />
                    <Button type='submit'>
                        login
                    </Button>
                    { isLogin ?
                        <NavLink to={REGISTRATION_ROUTE}>regist</NavLink>
                        :
                        <NavLink to={LOGIN_ROUTE}>login</NavLink>
                    }

                </Form>
            </Card>

        </Container>
    );
};

export default Auth;