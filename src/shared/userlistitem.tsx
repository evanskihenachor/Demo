import React from 'react';
import {Box, Pressable, Row, Avatar} from 'native-base';
import {User} from '../models/user.types';
import {SCREEN_WIDTH} from '../constants/app.constants';
import {AppText, FontWeight, TextSize} from './text';
import {useNavigation} from '@react-navigation/native';
import {
  RootScreens,
  UserDetailsNavigationProps,
} from '../navigators/navigator.config';
import {colorArray} from '../shared/styles';

const indx = Math.floor(Math.random() * 7);
export const UserListItem = ({user}: {user: User}) => {
  const navigation = useNavigation<UserDetailsNavigationProps>();
  return (
    <Box paddingBottom={3}>
      <Pressable
        width={SCREEN_WIDTH * 0.95}
        alignSelf="center"
        onPress={() => {
          navigation.navigate(RootScreens.UserDetails, {user: user});
        }}>
        <Row
          borderRadius={50}
          alignItems="center"
          padding={2}
          backgroundColor="#fff">
          <Box paddingLeft={1}>
            <Avatar
              color={colorArray[indx]}
              source={{
                uri: '',
              }}>
              {user?.name
                ?.split(' ')
                .map(n => n[0])
                .join('')}
            </Avatar>
          </Box>
          <Box paddingLeft={2}>
            <Box>
              <AppText
                color="black"
                weight={FontWeight.Regular}
                size={TextSize.BaseText}>
                {user.name}
              </AppText>
            </Box>
            <Box paddingTop={1} opacity={0.7}>
              <AppText
                color="black"
                weight={FontWeight.Regular}
                size={TextSize.BodySmall}>
                {user.email}
              </AppText>
            </Box>
          </Box>
        </Row>
      </Pressable>
    </Box>
  );
};
