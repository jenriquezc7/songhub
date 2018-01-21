import { User } from '../../models/user';

export interface UserState{
    entity: User;
    loggingIn: boolean;
    loggingOut: boolean;
    creating: boolean;
}