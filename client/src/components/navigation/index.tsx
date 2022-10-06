import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand, Row } from "reactstrap";

export interface INavigationProps {
    currentPage: string
    children?: any
}
/**
 * navigation bar
 */
const Navigation: React.FunctionComponent<INavigationProps> = ({ currentPage, children }) => {
    const determineColor = () => {
        switch (currentPage) {
            case 'Home':
                return ''
            case 'Dashboard':
                return ''
            case 'cjm-e':
                return 'btn-primary'
            case 'cjm-a':
                return 'btn-secondary'
            case 'login':
                return ''
            default:
                return ''
        }
    }

    return (

        <div className="navbar bg-base-100" style={{ paddingLeft: 20 }}>
            <a className={`btn ${determineColor()} text-xl`} style={{ paddingLeft: 20, paddingRight: 20 }}>
                <img src="https://uploads-ssl.webflow.com/61fbb7a9abcc0395abe7895d/61fbbdd51e3a3f3bfd511419_axess_logo_final_4-p-2000.png" alt="axess logo here" width="100" height="100" />
            </a>
            {children}
        </div>

    );
}

export default Navigation;
