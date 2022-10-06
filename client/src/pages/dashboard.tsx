import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Row } from 'reactstrap';
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import Navigation from "../components/navigation";
import CenterPiece from "../components/CenterPiece";

const DashBoard: React.FunctionComponent<{}> = props => {
    const { companyName } = useParams()
    const [companyData, setCompanyData] = useState<any>()

    return (
        <Container fluid classname="p-0">
            <Navigation currentPage="dashboard">
                <Row>
                    <a className="btn btn btn-ghost rounded-btn m-1">Home </a>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn btn-ghost rounded-btn m-1">journey maps</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href={companyName ? `/CJMEmails/${companyName}` : ''}>emails</a></li>
                            <li><a href={companyName ? `/CJMApps/${companyName}` : ''}>app push</a></li>
                        </ul>
                    </div>
                </Row>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-circle avatar">
                        <span className="text-3xl">{companyName?.charAt(0).toUpperCase()}</span>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><text>{`${companyName}`}'s dashboard</text></li>
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a href='/login' >Logout</a></li>
                    </ul>
                </div>
            </Navigation>

            <Container style={{ paddingLeft: 110, paddingTop: 40 }}>
                <h1 className="card-title" >
                    {`${companyName}`}'s dashboard
                </h1>
            </Container>

            <CenterPiece>
                <Row>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">email channel</h2>
                            <p>customer journey map created with email toucpoints</p>
                            <div className="card-actions justify-end">
                                <a className="btn btn-block" href={companyName ? `/CJMEmails/${companyName}` : ''}>
                                    go to journey map
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">app push channel</h2>
                            <p>customer journey map created with app push toucpoints</p>
                            <div className="card-actions justify-end">
                                <a className="btn btn-block" href={companyName ? `/CJMApps/${companyName}` : ''}>
                                    go to journey map
                                </a>
                            </div>
                        </div>
                    </div>
                </Row>

            </CenterPiece>

        </Container >
    )
}


export default DashBoard;

