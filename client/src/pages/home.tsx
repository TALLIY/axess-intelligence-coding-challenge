import React from "react";
import { Button, Card, CardBody, CardHeader, Row, Container } from 'reactstrap';
import Navigation from "../components/navigation";

/**
 * This is what would've been the front page in a normal project
 */

const HomePage: React.FunctionComponent<{}> = props => {
    return (
        <Container fluid classname="p-0">
            <Navigation currentPage="dashboard">
                <Row>
                    <a className="btn btn btn-ghost rounded-btn m-1" href='/login'> Sign In </a>
                </Row>
            </Navigation>
        </Container>
    )
}

export default HomePage;