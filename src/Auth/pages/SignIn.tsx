import React from 'react';
import { useHistory } from "react-router-dom";

// BOOTSTRAP COMPONENTS
import { Button, Container, Col, Row } from 'react-bootstrap';

// Repositories
import AuthRepository from '../repository/AuthRepository';


export const SignIn: React.FC = () => {

    const history = useHistory();

    return(
        <Container className='vh-100 d-flex align-items-center justify-content-center'>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <h1 className='text-rem-1-6' >Welcome to WorkApp</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button block onClick={() => {
                                AuthRepository.signIn()
                                history.push('/')
                            }}
                             >
                                Sign In
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}