import React, {useState} from 'react';
import {RootHeader} from '../../shared/headers';
import {Box, ScrollView, Row, Avatar, Pressable} from 'native-base';
import {SCREEN_WIDTH} from '../../constants/app.constants';
import {User} from '../../models/user.types';
import {AppText, FontWeight, TextSize} from '../../shared/text';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {
  MapDetailsNavigationProps,
  RootScreens,
} from '../../navigators/navigator.config';
import FlashMessage from 'react-native-flash-message';

export const UserDetailsScreen = (props: any) => {
  const [user] = useState<User>(props.route.params.user);
  const navigation = useNavigation<MapDetailsNavigationProps>();
  const ref = React.useRef<FlashMessage>(null);
  const renderContactInfoItem = (item: string) => {
    return (
      <Box paddingBottom={0.5}>
        <AppText
          size={TextSize.BaseText}
          weight={FontWeight.Regular}
          color="black">
          {item}
        </AppText>
      </Box>
    );
  };
  return (
    <>
      <RootHeader title="" showBackButton={true} />
      <ScrollView>
        <Box width={SCREEN_WIDTH} alignItems="center">
          <Box
            padding={3}
            borderRadius={50}
            width={SCREEN_WIDTH * 0.9}
            backgroundColor="white">
            <Row>
              <Avatar
                // color={colorArray[indx]}
                source={{
                  uri: '',
                }}>
                {user?.name
                  ?.split(' ')
                  .map(n => n[0])
                  .join('')}
              </Avatar>
              <Box paddingLeft={2}>
                <Box>
                  <AppText
                    size={TextSize.Heading3}
                    weight={FontWeight.Regular}
                    color="black">
                    {user?.name}
                  </AppText>
                </Box>
                <Box opacity={0.7} paddingTop={1}>
                  <AppText
                    size={TextSize.BaseText}
                    weight={FontWeight.Regular}
                    color="black">
                    {user?.company?.name}
                  </AppText>
                </Box>
              </Box>
            </Row>
          </Box>
          <Box paddingTop={3}>
            <Box
              padding={4}
              borderRadius={20}
              width={SCREEN_WIDTH * 0.9}
              alignItems="center"
              backgroundColor="white">
              <Box>
                <AppText
                  size={TextSize.Heading3}
                  weight={FontWeight.Regular}
                  color="black">
                  Contact Information
                </AppText>
              </Box>
              <Box paddingTop={3} width="100%" opacity={0.7}>
                <Pressable onPress={() => {}}>
                  <Row>
                    <Box>
                      <Icon
                        name="mail-outline"
                        type="ionicon"
                        size={25}
                        color="black"
                        //tvParallaxProperties={undefined}
                      />
                    </Box>
                    <Box paddingLeft={2}>
                      {renderContactInfoItem(user?.email)}
                    </Box>
                  </Row>
                </Pressable>
                <Pressable
                  onPress={() => {
                    navigation.navigate(RootScreens.MapDetails, {
                      address: user.address,
                    });
                  }}
                  paddingTop={3}>
                  <Row>
                    <Box>
                      <Icon
                        name="map-pin"
                        type="feather"
                        size={25}
                        color="black"
                        //tvParallaxProperties={undefined}
                      />
                    </Box>
                    <Box paddingLeft={2}>
                      {renderContactInfoItem(user?.address?.street)}
                      {renderContactInfoItem(user?.address?.suite)}
                      <Row>
                        {renderContactInfoItem(user?.address?.city)}
                        <Box paddingLeft={2}>
                          {renderContactInfoItem(user?.address?.zipcode)}
                        </Box>
                      </Row>
                    </Box>
                  </Row>
                </Pressable>

                <Pressable
                  onPress={() => {
                    setTimeout(() => {
                      ref.current?.hideMessage();
                    }, 5000);
                    ref.current?.showMessage({
                      message: 'Hook Up WebRTC Implementation To Make Calls',
                      type: 'info',
                    });
                    //Hook Up WebRTC Implementation To Make Calls
                  }}
                  paddingTop={3}>
                  <Row alignItems="center">
                    <Box>
                      <Icon
                        name="phone"
                        type="feather"
                        size={25}
                        color="black"
                        //tvParallaxProperties={undefined}
                      />
                    </Box>
                    <Box paddingLeft={2}>
                      {renderContactInfoItem(user?.phone)}
                    </Box>
                  </Row>
                </Pressable>
              </Box>
            </Box>
          </Box>
          <Box paddingTop={3}>
            <Box
              padding={4}
              borderRadius={20}
              width={SCREEN_WIDTH * 0.9}
              alignItems="center"
              backgroundColor="white">
              <Box>
                <AppText
                  size={TextSize.Heading3}
                  weight={FontWeight.Regular}
                  color="black">
                  Other Information
                </AppText>
              </Box>
              <Box paddingTop={2} width="100%" opacity={0.7}>
                <Box paddingTop={1}>
                  <AppText
                    size={TextSize.BaseText}
                    weight={FontWeight.Regular}
                    color="black">
                    {'User Name: ' + user?.username}
                  </AppText>
                </Box>
                <Box paddingTop={1}>
                  <AppText
                    size={TextSize.BaseText}
                    weight={FontWeight.Regular}
                    color="black">
                    {'Website: ' + user?.website}
                  </AppText>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollView>
      <FlashMessage ref={ref} position="top" />
    </>
  );
};
