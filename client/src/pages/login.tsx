import React, { useContext, useState } from 'react';
import UserContext from '../contexts/user';
import CenterPiece from '../components/CenterPiece';
import { Button, Card, CardBody, CardHeader } from 'reactstrap';
import Navigation from '../components/navigation';

/**
 * "log in" page. presson the press me button after running the frontend on the server
 */
const LoginPage: React.FunctionComponent<{}> = props => {
    const userContext = useContext(UserContext)
    const isLogin = window.location.pathname.includes('login');

    const [companyName, setCompanyName] = useState<string>()

    const handleCompanyInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyName(event.target.value.toLowerCase().trim())
    }

    return (
        <div>
            <Navigation currentPage='login' />
            <CenterPiece>
                <Card>
                    <CardHeader>
                        {'Login'}
                    </CardHeader>
                    <CardBody>
                        <input type="text" placeholder="Enter company id" value={companyName} onChange={handleCompanyInput} className="input input-bordered w-full max-w-xs mb-4" />
                        <a className="btn btn-block" href={companyName ? `/dashboard/${companyName}` : ''}>
                            Sign {isLogin ? 'in' : 'up'}
                        </a>
                        <a href="#my-modal-2" className="btn btn-outline">press me!</a>
                        <div className="modal" id="my-modal-2">
                            <div className="modal-box">
                                <p className="py-4">I tried implementing an login system using firebase however because of the significant amount of effort
                                needed to implement functionality for server- and clientside authentication, I have decided against that. To login here use
                                one of the username: netflix, amazon, disney. I know that this is not how authentication works bzt this is more of a proof 
                                of concept.  </p>
                                <div className="modal-action">
                                    <a href="#" className="btn">OK</a>
                                </div>
                            </div>
                        </div>
                    </CardBody>

                </Card>
            </CenterPiece>
        </div >

    );
}
export default LoginPage;