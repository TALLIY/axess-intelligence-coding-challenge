/**
 * define user for contexts
 */

export default interface IUser {
    id: string;
    name: string;
}

export const DEFAULT_USER: IUser = {
    id: '',
    name: ''
};