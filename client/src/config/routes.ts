import IRoute from '../interfaces/route';
import Dashboard from '../pages/dashboard';
import LoginPage from '../pages/login';
import CJMEmails from '../pages/cjm-emails';
import CJMApps from '../pages/cjm-apps';
import HomePage from '../pages/home';
import DashBoard from '../pages/dashboard';


/**
 * define routes
 */
const authRoutes: IRoute[] = [
    {
        name: 'Login',
        path: '/login',
        component: LoginPage,
        auth: false
    }
];

const CRMRoutes: IRoute[] = [
    {
        name: 'CJM Emails',
        path: '/CJMEmails/:companyName',
        component: CJMEmails,
        auth: true
    },
    {
        name: 'CJM Apps',
        path: '/CJMApps/:companyName',
        component: CJMApps,
        auth: true
    },
    {
        name: 'DashBoard',
        path: '/dashboard/:companyName',
        component: DashBoard,
        auth: true
    }
];

const mainRoutes: IRoute[] = [
    {
        name: 'Home',
        path: '/',
        component: HomePage,
        auth: false
    }
];

const routes: IRoute[] = [...authRoutes, ...CRMRoutes, ...mainRoutes];

export default routes;