import {UserTypeActions} from './user.types';

// fucntion has a type and a payload
export const setCurrentUser = user => ({
    //capital letters to indicate that we do not want it to chnage
    type: UserTypeActions.SET_CURRENT_USER,
    payload: user
});