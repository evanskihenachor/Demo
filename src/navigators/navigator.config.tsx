import {Address} from '../models/address.type';
import {User} from '../models/user.types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum RootScreens {
  UserDetails = 'UserDetails',
  MapDetails = 'MapDetails',
}

export type RootStackParamList = {
  [RootScreens.UserDetails]: {user: User};
  [RootScreens.MapDetails]: {address: Address};
};

export type UserDetailsNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  RootScreens.UserDetails
>;

export type MapDetailsNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  RootScreens.MapDetails
>;
