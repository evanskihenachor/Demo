import axios from 'axios';
import {User} from '../models/user.types';
import {API_URL} from '../constants/app.constants';

export const getUsers = async (): Promise<User[]> => {
  const resp = await axios.get(API_URL);
  return resp.data as User[];
};
