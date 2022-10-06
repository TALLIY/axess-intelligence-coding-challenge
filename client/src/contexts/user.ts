import { createContext } from 'react';
import IUser, { DEFAULT_USER } from '../interfaces/user';

/**
 * was to be used for authentication with firebase
 */

export interface IUserState {
    user: IUser;
    status: 'logged in' | 'logged out';
}

export interface IUserActions {
    type: 'login' | 'logout'; 
    payload: {
        user: IUser;
        status: 'logged in' | 'logged out';
    };
}

export const initialUserState: IUserState = {
    user: DEFAULT_USER,
    status: 'logged out'
};

export const userReducer = (state: IUserState, action: IUserActions) => {
    let user = action.payload.user;
    let status = action.payload.status;

    switch (action.type) {
        case 'login':
            localStorage.setItem('logged in', status);

            return { user, status };
        case 'logout':
            localStorage.removeItem('status');

            return initialUserState;
        default:
            return state;
    }
};

export interface IUserContextProps {
    userState: IUserState;
    userDispatch: React.Dispatch<IUserActions>;
}

const UserContext = createContext<IUserContextProps>({
    userState: initialUserState,
    userDispatch: () => {}
});

export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;
export default UserContext;