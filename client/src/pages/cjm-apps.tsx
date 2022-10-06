import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import CenterPiece from "../components/CenterPiece";
import Navigation from "../components/navigation";

/**
 * customer return jorney for app push page
 */
const CJMApps: React.FunctionComponent<{}> = props => {
    const params = useParams()

    /**
      * this is a very bad workaround to avoid using parameters in the fetch function for the sql queries. This was because of time constraints.
    */
    const companyMap = [
        { name: 'netflix', id: 7 },
        { name: 'disney', id: 328 },
        { name: 'prime', id: 325 }
    ]

    const currentCompanyId = companyMap.find(company => company.name === params.companyName)?.id

    const [data, setData] = useState<any[]>()

    useEffect(() => {
        fetch('http://localhost:5000/company/x').then(res => res.json())
            .then(res => { setData(res); console.log(res); })
            .catch(err => console.log(err));
    }, [])


    //<h1>{data && Object.keys(data[0]).map(x => x)}</h1>
    return (
        <Container fluid classname="p-0">
             <Navigation currentPage="cjm-a">
                <Row>
                    <a className="btn btn-outline btn-secondary rounded-btn m-1" href={`/dashboard/${params.companyName}`}>Dashboard </a>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-outline btn-secondary rounded-btn m-1">Channel</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 btn-secondary rounded-box w-52">
                            <li><a href={params.companyName ? `/CJMEmails/${params.companyName}` : ''}>emails</a></li>
                            <li><a href={params.companyName ? `/CJMApps/${params.companyName}` : ''}>app push</a></li>
                        </ul>
                    </div>
                </Row>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-secondary btn-circle avatar">
                        <span className="text-3xl">{params.companyName?.charAt(0).toUpperCase()}</span>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><text>{`${params.companyName}`}'s dashboard</text></li>
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
            {/* <OppositeContentTimeline/> */}
            <div className="flex flex-row justify-content-center">
                <ul className="steps steps-vertical">
                    {data?.filter(message => message.id === currentCompanyId).map((item) => {
                        return <li className="step step-secondary"><div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                            <img src={require(`../assets/images/App Push/${item.file_name}`)} alt="email" className="rounded-xl"/>
                                <h2>{`Touchpoint at: ${item.created_at.slice(0,10)} ${item.created_at.slice(11,19)}`}</h2>
                            </div>
                        </div></li>
                    })}
                </ul>
            </div>
        </Container>
    )
}


export default CJMApps;