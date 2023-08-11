import { atom } from 'recoil';
import { userInfo } from 'types/Auth';

export const UserInfoState = atom<userInfo>({
  key: 'userInfoState', // unique ID (with respect to other atoms/selectors)
  default: {
    isLogin: false,
    email: '',
    full_name: '',
    user_id: null,
  }, // default value (aka initial value)
});
