/**
 * define properties of routes
 */

export default interface IRoute {
    path: string;
    name: string;
    component: any;
    props?: any;
    auth?: boolean;
}