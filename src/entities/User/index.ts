import { getUserAuthData } from './model/selector/getUserAuthData/getUserAuthData';

export { userReducer, userActions } from './model/slice/userSlice';
export { UserSchema as UserShema, User } from './model/types/user';
export { getUserAuthData };
