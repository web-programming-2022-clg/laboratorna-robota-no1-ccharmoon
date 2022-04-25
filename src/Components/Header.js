import React, { Component } from 'react';
import { 
    Navbar, 
    Nav, 
    FormControl, 
    Container, 
    Form, 
    Button
 } from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Catalog from '../Pages/Catalog';
import News from '../Pages/News';
import Contacts from '../Pages/Contacts';
import Aboutuse from '../Pages/Aboutuse';


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/">ETNODIM</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/"> Catalog</Nav.Link>
                                <Nav.Link href="/news"> News</Nav.Link>
                                <Nav.Link href="/about"> About us</Nav.Link>
                                <Nav.Link href="/contacts"> Contacts</Nav.Link>
                            </Nav>
                            <Form inline >
                                <FormControl
                                    type="text"
                                    placeholder="Пошук"
                                    className="my-6"
                                />                               
                            </Form>
                        </Navbar.Collapse>
                        <Button variant="primary">Пошук</Button>   
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Catalog/>} />
                        <Route exact path="/news" element={<News/>} />
                        <Route exact path="/contacts" element={<Contacts/>} />
                        <Route exact path="/about" element={<Aboutuse/>} />
                    </Routes>
                </Router>
            </>
        );
    }
}    